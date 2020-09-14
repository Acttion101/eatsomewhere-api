module.exports = function (NewsModel, news_id) {
    return NewsModel.create({
      news_id,
        update_news_id:"1"
    }).then((response) => response["$attributes"])
}