'use strict'
const AdminUpdateValidator = require("../../../service/AdminUpdateValidator")
const Database = use('Database')
const AdminUpdate = use("App/Models/AdminUpdateNew")
const AdminUpdateUtil = require("../../../util/AdminUpdateUtil")

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }
    return {}
}

class AdminUpdateNewController {
    async index({ request }) {
        const { references } = request.qs
        const adminUpdateUtil = new AdminUpdateUtil(AdminUpdate)
        const adminUpdates = await adminUpdateUtil.getAll(references)

        return { status: 200, error: undefined, data: adminUpdates }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }
        const adminUpdateUtil = new AdminUpdateUtil(AdminUpdate)
        const adminUpdates = adminUpdateUtil.getById(id, references)
        return { status: 200, error: undefined, data: adminUpdates || {} }

    }
    async store({ request }) {
        const { news, detail } = request.body
        const { references } = request.qs
        const validatedData = await AdminUpdateValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }


        const adminUpdateUtil = new AdminUpdateUtil(AdminUpdate)
        const adminUpdates = await adminUpdateUtil.create({ news, detail }, references)

        return { status: 200, error: undefined, data: adminUpdates }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { news, detail } = body


        const adminUpdateId = await Database
            .table('admin_update_news')
            .where({ update_news_id: id })
            .update({ news, detail })

        const adminUpdates = await Database
            .table('admin_update_news')
            .where({ update_news_id: adminUpdateId })
            .first()

        return { status: 200, error: undefined, data: adminUpdates }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('admin_update_news')
            .where({ update_news_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = AdminUpdateNewController