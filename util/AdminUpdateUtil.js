class AdminUpdateUtil {

    constructor(AdminUpdateModel) {
        this._AdminUpdate = AdminUpdateModel
    }


    getAll(references) {
        const adminUpdate = this._AdminUpdate.query()

        return this._withReference(adminUpdate, references)
            .fetch()
    }

    getById(adminUpdateId, references) {
        const adminUpdate = this._AdminUpdate
            .query()
            .where('update_news_id', adminUpdateId)

        return this._withReference(adminUpdate, references)
            .fetch()
            .then(response => response.first())
    }

    async create(userInstance, references) {
        const { update_news_id } = await this._AdminUpdate.create(userInstance)
        const adminUpdate = this._AdminUpdate
            .query()
            .where('update_news_id', update_news_id)

        return this._withReference(adminUpdate, references)
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
module.exports = AdminUpdateUtil