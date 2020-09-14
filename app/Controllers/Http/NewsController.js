'use strict'
const News = use("App/Models/News")

const Database = use('Database')
const NewValidator = require("../../../service/NewValidator")
const NewUtil = require("../../../util/NewUtil.func")

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not supported, please use number type param instead.` }
    return {}
}

class NewsController {
    async index({ request }) {
        const { references } = request.qs
        const newUtil = new NewUtil(News)
        const news = await newUtil.getAll(references)

        return { status: 200, error: undefined, data: news }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const newUtil = new NewUtil(News)
        const news = newUtil.getById(id, references)
        return { status: 200, error: undefined, data: news || {} }

    }
    async store({ request }) {
        const { update_news_id } = request.body
            //const { references } = request.qs
        const validatedData = await NewValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }
        const news = new News;
        news.update_news_id = update_news_id;

        await news.save()

        return { status: 200, error: undefined, data: news }

        //const newUtil = new NewUtil(News)
        //const news = await newUtil.create({ update_news_id }, references)

        //return { status: 200, error: undefined, data: news }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { update_news_id } = body


        const NewsId = await Database
            .table('news')
            .where({ news_id: id })
            .update({ update_news_id })

        const news = await Database
            .table('news')
            .where({ news_id: NewsId })
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