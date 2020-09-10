'use strict'
const New = use("App/Models/New")

const Database = use('Database')
const NewValidator = require("../../../service/NewValidator")
class NewsController {

    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { admin_update_id } = body


        const updateNewsId = await Database
            .table('news')
            .where({ news_id: id })
            .update({ admin_update_id })

        const news = await Database
            .table('news')
            .where({ news_id: updateNewsId })
            .first()

        return { status: 200, error: undefined, data: news }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('news')
            .where({ news_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = NewsController