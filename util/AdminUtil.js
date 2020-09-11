class AdminUtil {

    constructor(AdminModel) {
        this._Admin = AdminModel
    }

    getAll(references) {
        const admins = this._Admin.query()

        return this._withReference(admins, references)
            .fetch()
    }

    getById(adminId, references) {
        const admin = this._Admin
            .query()
            .where('admin_id', adminId)

        return this._withReference(admin, references)
            .fetch()
            .then(response => response.first())
    }

    async create(adminInstance, references) {
        const { admin_id } = await this._Admin.create(adminInstance)
        const admin = this._Admin
            .query()
            .where('admin_id', admin_id)

        return this._withReference(admin, references)
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
module.exports = AdminUtil