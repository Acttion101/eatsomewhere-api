class AdminUpdateUtil {

    constructor(AdminUpdateModel) {
        this._AdminUpdate = AdminUpdateModel
    }

    getAll(references) {
        const adminUpdate = this._AdminUpdate.query()
        if (references) {
            const extractedReferences = references.split(",");
            extractedReferences.forEach(reference => {
                adminUpdate.with(reference)

            });
        }
        return adminUpdate.fetch()
    }

    getById(adminUpdateId, references) {
        const adminUpdate = this._AdminUpdate
            .query()
            .where('update_news_id', adminUpdateId)
        if (references) {
            const extractedReferences = references.split(",");
            adminUpdate.with(extractedReferences)
        }
        return adminUpdate
            .fetch()
            .then(response => response.first())
    }


}
module.exports = AdminUpdateUtil