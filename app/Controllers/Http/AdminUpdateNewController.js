'use strict'

class AdminUpdateNewController {
    async store({ request }) {
        const { news, detail } = request.body

        const rules = {
            news: 'required',
            datail: 'required',
        }
        const validation = await Validator.validateAll(request.body, rules)

        if (validation.fails())
            return { status: 422, error: validation.messages(), data: undefined }

        const subject = new Subject();
        subject.admin_id = admin_id;
        await subject.save()

        return { status: 200, error: undefined, data: subject }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { news, detail } = body


        const updateNewsId = await Database
            .table('update_news')
            .where({ update_news_id: id })
            .update({ news, detail })

        const update_news = await Database
            .table('update_news')
            .where({ update_news_id: updateNewsId })
            .first()

        return { status: 200, error: undefined, data: update_news }
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