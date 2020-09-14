module.exports = function (CommunityModel, community_id) {
    return CommunityModel.create({
      community_id,
      post:"hii",
      comment_post:"godd"
      
    }).then((response) => response["$attributes"])
}
  