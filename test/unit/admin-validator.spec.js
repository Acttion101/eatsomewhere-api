'use strict'

const { test } = use('Test/Suite')('Admin Validator')
const AdminValidator = require('../../service/AdminValidator')

test('should receive object as first parameter', async({ assert }) => {
    const validatedData = await AdminValidator({
        first_name: "Saro",
        last_name: "Kahapana",
        age: '20',
        admin_name: 'saroramita',
        passsword: '010219saro',
        status: 'admin',
    })
    assert.isOk(validatedData)

})

test('should return only  one error if single incorrect data is passed', async({ assert }) => {
    const validatedData = await AdminValidator({
        first_name: "Saro",
        last_name: "Kahapana",
        age: '20',
        admin_name: 'saroramita',
        passsword: '010219saro',
        status: 'admin'
    })
    assert.equal(validatedData.error.length, 2)
})

test('should return undefined when pass correct data', async({ assert }) => {
    const validatedData = await AdminValidator({
        first_name: "Saro",
        last_name: "Kahapana",
        age: '20',
        admin_name: 'saroramita11',
        passsword: '010219saross',
        status: 'admin'
    })
    assert.isArray(validatedData.error, undefined)
})