class CommunityUtil{
    constructor(CommunityModel) {
        this._Community = CommunityModel
    }

    getAll(references) {
        const community = this._Community.query()

        return this._withReference(adminUpdate, references)
            .fetch()
    }

    getById(communityId, references) {
        const community  = this._Community
            .query()
            .where('community_id', communityId)

        return this._withReference(community, references)
            .fetch()
            .then(response => response.first())
    }

    async create(communityInstance, references) {
        const { community_id } = await this._Community.create(communityInstance)
        const community = this._Community
            .query()
            .where('community_id', community_id)

        return this._withReference(community, references)
            .fetch()
            .then(response => response.first())
    }

    _withReference(instance, references) {
        if (references) {
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }

        return instance
    }
}