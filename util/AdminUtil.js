class AdminUtil {

    constructor(AdminModel) {
        this._Admin = AdminModel
    }

    getAll(references) {
        const admins = this._Admin.query()
        if (references) {
            const extractedReferences = references.split(",");
            admins.with(extractedReferences)
        }
        return admins
            .fetch()
    }

    getById(adminId, references) {
        if (references) {
            const extractedReferences = references.split(",");
            admins.with(extractedReferences)
        }
        return admins
            .fetch()
            .then(response => response.first())
    }


}
module.exports = AdminUtil