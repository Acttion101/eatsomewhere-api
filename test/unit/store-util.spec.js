'use strict'

const { test, trait } = use('Test/Suite')('Store Util')
const StoreUtil = require("../../util/StoreUtil")
const urlstore = ('/api/v2/stores')
trait('Test/ApiClient')
const Store = use('App/Models/Store')

test('get list of store', async({ client }) => {
    await Store.create({
        store_name: 'ddeee',
        detail: 'ddddddddddddddddddd',
        comment_review: 'Blog post content',
        admin_id: '1',
        user_id: '1'
    })

    const response = await client.get(`${urlstore}`).end()
    response.assertStatus(200)

})

test("should get all stores", async({ assert }) => {
    const storeUtil = new StoreUtil(Store);
    const stores = await storeUtil.getAll()
    assert.isObject(stores)
})