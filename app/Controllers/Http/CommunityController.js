'use strict'
const Database = use('Database')
const CommunityValidator = require("../../../service/CommunityValidator")
const Community =use("App/Models/Community")
const CommunityUtil= require("../../../util/CommunityUtil")

function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}

class CommunityController {
    async index({ request }) {
        const { references } = request.qs
        const communityUtil = new CommunityUtil(community)
        const community = await communityUtil.getAll(references)

        return { status: 200, error: undefined, data: community}
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const communityUtil = new CommunityUtil(community)
        const community = communityUtil.getById(id, references)
        return { status: 200, error: undefined, data: community || {} }

    }
    async store({ request }) {
        const { post,comment_post } = request.body
        const { references } = request.qs
        const communityUtil = new CommunityUtil(community)
        const community = await communityUtil.create({ post,comment_post }, references)

        return { status: 200, error: undefined, data: community }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { post,comment_post } = body
        const communityId = await Database
            .table('communitys')
            .where({ community_id: id })
            .update({ post,comment_post })

        const community = await Database
            .table('communitys')
            .where({ communitys_id: communityId })
            .first()

        return { status: 200, error: undefined, data: community }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('communitys')
            .where({ community_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = CommunityController
