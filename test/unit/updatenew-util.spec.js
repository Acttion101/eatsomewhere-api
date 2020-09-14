'use strict'

const { test } = use('Test/Suite')('New Util')
const AdminUpdateUtil = require("../../util/AdminUpdateUtil")
const MockUpdateNewModel = use("App/Models/AdminUpdateNew")


test("should get all  news", async({ assert }) => {
    const updateNewUtil = new AdminUpdateUtil(MockUpdateNewModel);
    const update_news = await updateNewUtil.getAll()
    assert.isObject(update_news)
})