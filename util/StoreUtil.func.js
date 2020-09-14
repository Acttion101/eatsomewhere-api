module.exports = function(StoreModel) {
    const _withReferences = (references) => {
        const _Store = StoreModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _Store.with(references))
            }
        return _Store
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (store_id,references) => {
            return _withReferences(references)
                .where({store_id})
                .fetch()
                .then((response) => response.first())
        },
        create: async (attributes , references) => {
            const {store_id} = await StoreModel.create(attributes)

            return _withReferences(references)
                .where({store_id})
                .fetch()
                .then((response) => response.first())
        },
        updateByID: async (store_id,attributes,references) => {
            let store = await StoreModel.find(store_id)
            store.merge(attributes)
            await store.save()

            return _withReferences(references)
                .where({store_id})
                .fetch()
                .then((response) => response.first())
        },
        deleteByID: async (store_id) => {
            const store = await StoreModel.find(store_id)
            if(store !== null) {
                return store.delete()
            }
            else {
                return store
            }
        }
    }
}