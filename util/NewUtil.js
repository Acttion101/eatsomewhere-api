class NewUtil {

    constructor(NewModel) {
        this._New = NewModel
    }

    getAll(references) {
        const news = this._New.query()

        return this._withReference(news, references)
            .fetch()
    }

    getById(newId, references) {
        const news = this._New
            .query()
            .where('news_id', newId)

        return this._withReference(news, references)
            .fetch()
            .then(response => response.first())
    }

    async create(newInstance, references) {
        const { news_id } = await this._New.create(newInstance)
        const news = this._New
            .query()
            .where('news_id', news_id)

        return this._withReference(news, references)
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
module.exports = NewUtil