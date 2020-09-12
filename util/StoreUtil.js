class StoreUtil {

    constructor(StoreModel) {
        this._Store = StoreModel
    }

    getAll(references) {
        const store = this._Store.query()
        if (references) {
            const extractedReferences = references.split(",");
            extractedReferences.forEach(reference => {
                store.with(reference)

            });
        }
        return store.fetch()
    }

    getById(storeId, references) {
        const store = this._Store
            .query()
            .where('store_id', storeId)
        if (references) {
            const extractedReferences = references.split(",");
            store.with(extractedReferences)
        }
        return store
            .fetch()
            .then(response => response.first())
    }


}
module.exports = StoreUtil