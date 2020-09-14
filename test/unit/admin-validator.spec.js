'use strict'

const { test } = use('Test/Suite')('Admin Validator')
const AdminUtil = require("../../util/AdminUtil.func")
const MockAdminModel = use("App/Models/Admin")
    //const adminValidator = require('../../service/TeacherValidator')

test("should get all admins", async({ assert }) => {
    const adminUtil = new AdminUtil(MockAdminModel);
    const admins = await adminUtil.getAll()
    assert.isObject(admins)
})