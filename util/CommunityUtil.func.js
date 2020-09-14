module.exports = function(CommunityModel) {
    const _withReferences = (references) => {
        const _Community = CommunityModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _Community.with(references))
            }
        return _Community
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (community_id,references) => {
            return _withReferences(references)
                .where({community_id})
                .fetch()
                .then((response) => response.first())
        },
        create: async (attributes , references) => {
            const {community_id} = await CommunityModel.create(attributes)
            return _withReferences(references)
                .where({community_id})
                .fetch()
                .then((response) => response.first())
        },
        updateByID: async (community_id,attributes,references) => {
            let community = await CommunityModel.find(community_id)
            community.merge(attributes)
            await community.save()

            return _withReferences(references)
                .where({community_id})
                .fetch()
                .then((response) => response.first())
        },
        deleteByID: async (community_id) => {
            const community = await AdminModel.find(community_id)
            if(community !== null) {
                return community.delete()
            }
            else {
                return community
            }
        }
    }
}