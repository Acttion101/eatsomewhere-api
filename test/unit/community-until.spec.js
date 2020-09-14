'use strict'

const { test } = use('Test/Suite')('Community Util')
const CommunityUtil = require("../../util/Community")
const MockCommunityModel = use("App/Models/Community")

test("shculd get all user", async ({ assert }) => {
  const communityUtil = new CommunityUtil(MockCommunityModel);
  const communitys = await communityUtil.getAll()
  assert.isObject(communitys)
})
