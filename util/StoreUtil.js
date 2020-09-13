class StoreUtil {

    constructor(StoreModel) {
        this._Store = StoreModel
    }


    getAll(references) {
        const stores = this._Store.query()

        return this._withReference(stores, references)
            .fetch()
    }

    getById(storeId, references) {
        const stores = this._Store
            .query()
            .where('store_id', storeId)

        return this._withReference(stores, references)
            .fetch()
            .then(response => response.first())
    }

    async create(userInstance, references) {
        const { store_id } = await this._Store.create(userInstance)
        const stores = this._Store
            .query()
            .where('store_id', store_id)

        return this._withReference(stores, references)
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
module.exports = StoreUtil