'use strict'
const AdminValidator = require("../../../service/AdminValidator")
const Database = use('Database')
const Admin = use("App/Models/Admin")
const AdminUtil = require("../../../util/AdminUtil")
const Hash = use('Hash')

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }
    return {}
}

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
        const adminUtil = new AdminUtil(Admin)
        const admin = adminUtil.getById(id, references)
        return { status: 200, error: undefined, data: admin || {} }

    }
    async store({ request }) {
        const { first_name, last_name, age, admin_name, password, status } = request.body
        const { references } = request.qs



        const adminUtil = new AdminUtil(Admin)
        const admin = await adminUtil.create({ first_name, last_name, age, admin_name, password, status }, references)

        return { status: 200, error: undefined, data: admin }

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

        const admin = await Database
            .table('admins')
            .where({ admin_id: adminId })
            .first()

        return { status: 200, error: undefined, data: admin }
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