'use strict'
const UserValidator = require("../../../service/UserValidator")
const Database = use('Database')
const User = use("App/Models/User")
const UserUtil = require("../../../util/UserUtil")

function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}

class UserController {
    async index({ request }) {
        const { references } = request.qs
        const userUtil = new UserUtil(User)
        const user = await userUtil.getAll(references)

        return { status: 200, error: undefined, data: user }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const userUtil = new UserUtil(User)
        const user = userUtil.getById(id, references)
        return { status: 200, error: undefined, data: user || {} }

    }
    async store({ request }) {
        const { first_name, last_name, age, user_name, password, status } = request.body
        const { references } = request.qs
        const validatedData = await UserValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }

        const userUtil = new UserUtil(User)
        const user = await userUtil.create({ first_name, last_name, age, user_name, password, status}, references)

        return { status: 200, error: undefined, data: user }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { first_name, last_name, age, user_name, password, status } = body


        const userId = await Database
            .table('users')
            .where({ user_id: id })
            .update({ first_name, last_name, age, user_name, password, status })

        const user = await Database
            .table('users')
            .where({ user_id:userId })
            .first()

        return { status: 200, error: undefined, data: user }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('user')
            .where({user_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = UserController
