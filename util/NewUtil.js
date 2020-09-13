class NewUtil {

    constructor(NewsModel) {
        this._News = NewsModel
    }

    getAll(references) {
        const news = this._News.query()
        if (references) {
            const extractedReferences = references.split(",");
            extractedReferences.forEach(reference => {
                news.with(reference)

            });
        }
        return news.fetch()
    }

    getById(newsId, references) {
        const news = this._News
            .query()
            .where('news_id', newsId)
        if (references) {
            const extractedReferences = references.split(",");
            news.with(extractedReferences)
        }
        return news
            .fetch()
            .then(response => response.first())
    }

}
module.exports = NewUtil