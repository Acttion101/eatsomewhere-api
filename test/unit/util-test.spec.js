'use strict'
const { test, trait } = use('Test/Suite')('Util Test')

const UserUtil = require("../../util/UserUtil.func")
const MockUserModel = use("App/Models/User")
const urluser = ('/api/v2/users')

const AdminUtil = require("../../util/AdminUtil.func")
const Admin = use("App/Models/Admin")
const urladmin = ('/api/v2/admins')

const StoreUtil = require("../../util/StoreUtil.func")
const urlstore = ('/api/v2/stores')
const Store = use('App/Models/Store')

const CommunityUtil = require("../../util/CommunityUtil.func")
const MockCommunityModel = use("App/Models/Community")

trait('Test/ApiClient')

test("should get all user", async({ assert }) => {
    const communityUtil = new CommunityUtil(MockCommunityModel);
    const communitys = await communityUtil.getAll()
    assert.isObject(communitys)
})

test("should get all user", async({ assert }) => {
    const userUtil = new UserUtil(MockUserModel);
    const users = await userUtil.getAll()
    assert.isObject(users)
})
test('get list of user', async({ client }) => {
    await MockUserModel.create({
        first_name: 'ddeee',
        last_name: 'ddddddddddddddddddd',
        age: '22',
        day_month_year:'12/22/2020',
        username: 'sasasa',
        password: '12345679',
        status: 'admin'
    })

    const response = await client.get(`${urluser}`).end()
    response.assertStatus(200)

})

test('get list of admin', async({ client }) => {
    await Admin.create({
        first_name: 'ddeee',
        last_name: 'ddddddddddddddddddd',
        age: '22',
        admin_name: 'sasasa',
        password: '12345679',
        status: 'admin'
    })

    const response = await client.get(`${urladmin}`).end()
    response.assertStatus(200)

})

test("should get all admins", async({ assert }) => {
    const adminUtil = new AdminUtil(Admin);
    const admins = await adminUtil.getAll()
    assert.isObject(admins)

})
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
