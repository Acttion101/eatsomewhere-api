'use strict'
const Database = use('Database')
const CommunityValidator = require("../../../service/CommunityValidator")
const Community = use("App/Models/Community")
const CommunityUtil = require("../../../util/CommunityUtil.func")

function numberTypeParamValidator(number) {
    if (Number.isNaN(parseInt(number)))
        return { error: `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}

class CommunityController {
    async index({ request }) {
        const { references } = request.qs
        const communityUtil = new CommunityUtil(Community)
        const community = await communityUtil.getAll(references)

        return { status: 200, error: undefined, data: community }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error)
            return { status: 500, error: validatedValue.error, data: undefined }

        const communityUtil = new CommunityUtil(Community)
        const community = communityUtil.getById(id, references)
        return { status: 200, error: undefined, data: community || {} }

    }
    async store({ request }) {
        const { post, comment_post, user_id } = request.body
        const { references } = request.qs
        const validatedData = await CommunityValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }

        const communityUtil = new CommunityUtil(Community)
        const community = await communityUtil.create({ post, comment_post, user_id }, references)

        return { status: 200, error: undefined, data: community }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { post, comment_post, user_id } = body
        const communityId = await Database
            .table('communities')
            .where({ community_id: id })
            .update({ post, comment_post, user_id })

        const community = await Database
            .table('communities')
            .where({ communitys_id: communityId })
            .first()

        return { status: 200, error: undefined, data: community }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('communities')
            .where({ community_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = CommunityController