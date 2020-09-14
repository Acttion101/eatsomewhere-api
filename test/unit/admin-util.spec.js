'use strict'

const { test } = use('Test/Suite')('Admin Validator')
const AdminUtil = require("../../util/AdminUtil")
const MockAdminModel = use("App/Models/Admin")


test("should get all admins", async({ assert }) => {
    const adminUtil = new AdminUtil(MockAdminModel);
    const admins = await adminUtil.getAll()
    assert.isObject(admins)
})