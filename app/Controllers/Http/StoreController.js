'use strict'
const Store = use("App/Models/Store")

const Database = use('Database')
const StoreValidator = require("../../../service/StoreValidator")
const StoreUtil = require("../../../util/StoreUtil.func")



class StoreController {
    async index({ request }) {
        const { references } = request.qs
        const storeUtil = new StoreUtil(Store)
        const stores = await storeUtil.getAll(references)

        return { status: 200, error: undefined, data: stores }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs

        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const storeUtil = new StoreUtil(Store)
        const stores = storeUtil.getById(id, references)
        return { status: 200, error: undefined, data: stores || {} }

    }
    async store({ request }) {
        const { store_name, detail, comment_review, user_id, admin_id } = request.body


        const validatedData = await StoreValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }
        const { references } = request.qs
        const storeUtil = new StoreUtil(Store)
        const stores = await storeUtil.create({ store_name, detail, comment_review, user_id, admin_id }, references)

        return { status: 200, error: undefined, data: stores }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { store_name, detail, comment_review, user_id, admin_id } = body


        const storeId = await Database
            .table('stores')
            .where({ store_id: id })
            .update({ store_name, detail, comment_review, user_id, admin_id })

        const store = await Database
            .table('stores')
            .where({ store_id: storeId })
            .first()

        return { status: 200, error: undefined, data: store }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('stores')
            .where({ store_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = StoreController
