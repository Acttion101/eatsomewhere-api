class StoreUtil {

    constructor(StoreModel) {
        this._Store = StoreModel
    }

    getAll(references) {
        const store = this._Store.query()

        return this._withReference(store, references)
            .fetch()
    }

    getById(storeId, references) {
        const store = this._Store
            .query()
            .where('store_id', storeId)

        return this._withReference(store, references)
            .fetch()
            .then(response => response.first())
    }

    async create(storeInstance, references) {
        const { store_id } = await this._Store.create(storeInstance)
        const store = this._Store
            .query()
            .where('store_id', store_id)

        return this._withReference(store, references)
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