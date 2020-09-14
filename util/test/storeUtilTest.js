module.exports = function (StoreModel, store_id) {
    return StoreModel.create({
        store_name: "actshop",
        detail: "lowpice",
        comment_review: "good",
        // user_id: 'required',
        // admin_id: 'required'
    }).then((response) => response["$attributes"])
}