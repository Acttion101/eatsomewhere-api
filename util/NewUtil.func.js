module.exports = function(NewsModel) {
    const _withReferences = (references) => {
        const _News = NewsModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _News.with(references))
            }
        return _News
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (news_id,references) => {
            return _withReferences(references)
                .where({news_id})
                .fetch()
                .then((response) => response.first())
        },
        create: async (attributes , references) => {
            const {news_id} = await NewsModel.create(attributes)

            return _withReferences(references)
                .where({news_id})
                .fetch()
                .then((response) => response.first())
        },
        updateByID: async (news_id,attributes,references) => {
            let news = await NewsModel.find(news_id)
            news.merge(attributes)
            await news.save()

            return _withReferences(references)
                .where({news_id})
                .fetch()
                .then((response) => response.first())
        },
        deleteByID: async (news_id) => {
            const news = await NewsModel.find(news_id)
            if(news !== null) {
                return news.delete()
            }
            else {
                return news
            }
        }
    }
}