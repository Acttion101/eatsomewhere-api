'use strict'
const New = use("App/Models/News")

const Database = use('Database')
const NewValidator = require("../../../service/NewValidator")
const NewUtil = require("../../../util/NewUtil")

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }
    return {}
}

class NewsController {
    async index({ request }) {
        const { references } = request.qs
        const newUtil = new NewUtil(New)
        const news = await newUtil.getAll(references)

        return { status: 200, error: undefined, data: news }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const newUtil = new NewUtil(New)
        const news = newUtil.getById(id, references)
        return { status: 200, error: undefined, data: news || {} }

    }
    async store({ request }) {
        const { update_news_id } = request.body
        const { references } = request.qs



        const newUtil = new NewUtil(New)
        const news = await newUtil.create({ update_news_id }, references)

        return { status: 200, error: undefined, data: news }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { update_news_id } = body


        const updateNewsId = await Database
            .table('news')
            .where({ news_id: id })
            .update({ update_news_id })

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