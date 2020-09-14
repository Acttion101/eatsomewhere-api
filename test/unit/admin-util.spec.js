'use strict'

const { test, trait } = use('Test/Suite')('Admin Validator')
const AdminUtil = require("../../util/AdminUtil.func")
const Admin = use("App/Models/Admin")
const urladmin = ('/api/v2/admins')
trait('Test/ApiClient')

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