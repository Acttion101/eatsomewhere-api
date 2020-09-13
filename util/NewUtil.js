class NewUtil {

    constructor(NewsModel) {
        this._News = NewsModel
    }

    getAll(references) {
        const news = this._News.query()

        return this._withReference(news, references)
            .fetch()
    }

    getById(newsId, references) {
        const news = this._News
            .query()
            .where('news_id', newsId)

        return this._withReference(news, references)
            .fetch()
            .then(response => response.first())
    }

    async create(userInstance, references) {
        const { news_id } = await this._News.create(userInstance)
        const news = this._News
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