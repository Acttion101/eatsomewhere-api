'use strict'
const AdminValidator = require("../../../service/AdminValidator")
const Database = use('Database')
const Admin = use("App/Models/Admin")
const AdminUtil = require('../../../util/AdminUtil.func')
const Hash = use('Hash')



class AdminController {
    async index({ request }) {
        const { references } = request.qs
        const adminUtil = new AdminUtil(Admin)
        const admins = await adminUtil.getAll(references)

        return { status: 200, error: undefined, data: admins }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const adminUtil = new AdminUtil(Admin)
        const admins = adminUtil.getById(id, references)
        return { status: 200, error: undefined, data: admins || {} }

    }
    async store({ request }) {
        const { first_name, last_name, age, admin_name, password, status } = request.body
        const { references } = request.qs
        const validatedData = await AdminValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }


        const adminUtil = new AdminUtil(Admin)
        const admins = await adminUtil.create({ first_name, last_name, age, admin_name, password, status }, references)

        return { status: 200, error: undefined, data: admins }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { first_name, last_name, age, admin_name, password, status } = body

        const hashedPassword = await Hash.make(password)

        const adminId = await Database
            .table('admins')
            .where({ admin_id: id })
            .update({ first_name, last_name, age, admin_name, password: hashedPassword, status })

        const admins = await Database
            .table('admins')
            .where({ admin_id: adminId })
            .first()

        return { status: 200, error: undefined, data: admins }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('admins')
            .where({ admin_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = AdminController
