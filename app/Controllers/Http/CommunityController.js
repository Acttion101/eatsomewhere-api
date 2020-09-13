'use strict'
const Database = use('Database')
const CommunityValidator = require("../../../service/CommunityValidator")
const Community =use("App/Models/Community")
const CommunityUtill = require("../../../util/Community")

function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}

class CommunityController {
    async index({ request }) {
        const { references } = request.qs
        const communityUtill = new CommunityUtill(Community)
        const community = await communityUtill.getAll(references)

        return { status: 200, error: undefined, data: community}
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const communityUtill = new CommunityUtill(Community)
        const community = communityUtill.getById(id, references)
        return { status: 200, error: undefined, data: community || {} }

    }
    async store({ request }) {
        const { post,comment_post } = request.body
        const { references } = request.qs
        const communityUtill = new CommunityUtill(Community)
        const community = await communityUtill.create({ post,comment_post }, references)

        return { status: 200, error: undefined, data: community }

    }
    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { post,comment_post } = body
        const communityId = await Database
            .table('communities')
            .where({ community_id: id })
            .update({ post,comment_post })

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
