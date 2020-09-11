'use strict'
const AdminUpdateValidator = require("../../../service/AdminUpdateValidator")
const Database = use('Database')
const Admin = use("App/Models/Admin")
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
        const adminUpdateUtil = new AdminUpdateUtil(AdminUpdate)
        const adminUpdate = adminUpdateUtil.getById(id, references)
        return { status: 200, error: undefined, data: adminUpdate || {} }

    }
    async store({ request }) {
        const { news, detail } = request.body
        const { references } = request.qs



        const adminUpdateUtil = new AdminUpdateUtil(AdminUpdate)
        const adminUpdate = await adminUpdateUtil.create({ news, detail }, references)

        return { status: 200, error: undefined, data: adminUpdate }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { news, detail } = body


        const adminUpdateId = await Database
            .table('update_news')
            .where({ update_news_id: id })
            .update({ news, detail })

        const adminUpdate = await Database
            .table('update_news')
            .where({ update_news_id: adminUpdateId })
            .first()

        return { status: 200, error: undefined, data: adminUpdate }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('update_news')
            .where({ update_news_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = AdminUpdateNewController