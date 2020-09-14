'use strict'

const { test, trait } = use('Test/Suite')('New Util')
const AdminUpdateUtil = require("../../util/AdminUpdateUtil")
const UpdateNew = use("App/Models/AdminUpdateNew")
const urlUpdateNew = ('/api/v2/admin_update_news')
trait('Test/ApiClient')

test('get list of new', async({ client }) => {
    await UpdateNew.create({
        news: 'ddeee',
        detail: 'ddddddddddddddddddd',

    })

    const response = await client.get(`${urlUpdateNew}`).end()
    response.assertStatus(200)

})

test("should get all  news", async({ assert }) => {
    const updateNewUtil = new AdminUpdateUtil(UpdateNew);
    const update_news = await updateNewUtil.getAll()
    assert.isObject(update_news)
})