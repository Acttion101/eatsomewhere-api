'use strict'

const { test } = use('Test/Suite')('Validator Test')
const UserValidator = require('../../service/UserValidator')


const AdminUpdateValidator = require('../../service/AdminUpdateValidator')


const StoreValidator = require('../../service/StoreValidator')


const CommunityValidator = require('../../service/CommunityValidator')


const AdminValidator = require('../../service/AdminValidator')

test('should return error with incorrect data that required from user validator', async({ assert }) => {
    const data = {
        first_name: "John",
        last_name: "Doe",
        age: '20',
        username: "Johnlnwza",
        password: "12345678",
        status: "user"
    }
    const user = await UserValidator(data)
    assert.isOk(user.error, 'user error')
})

test('should receive object as first parameter from user validator', async({ assert }) => {
    const validatedData = await UserValidator({
        first_name: "John",
        last_name: "Doe",
        age: '20',
        username: "Johnlnwza",
        password: "12345678",
        status: "user"
    })
    assert.isOk(validatedData)
})
test('should return undefined when pass correct data from user validator', async({ assert }) => {
    const validatedData = await UserValidator({
        first_name: "John",
        last_name: "Doe",
        age: '20',
        username: "Johnlnwza",
        password: "12345678",
        status: "user"
    })

    assert.isArray(validatedData.error, undefined)
})
test('should receive object as first parameter from adminUpdate validator', async({ assert }) => {
    const validatedData = await AdminUpdateValidator({
        news: 'ddeee',
        detail: 'ddddddddddddddddddd',
    })
    assert.isOk(validatedData)
})




test('should return undefined when pass correct data from adminUpdate validator', async({ assert }) => {
    const validatedData = await AdminUpdateValidator({
        news: 'ddeee',
        detail: 'ddddddddddddddddddd',
    })
    assert.equal(validatedData.error, undefined)
})

test('should receive object as first parameter from store validator', async({ assert }) => {
    const validatedData = await StoreValidator({
        store_name: 'ddeee',
        detail: 'ddddddddddddddddddd',
        comment_review: 'Blog post content',
        admin_id: '1',
        user_id: '1'
    })
    assert.isOk(validatedData)
})

test('should return undefined when pass correct data from store validator', async({ assert }) => {
    const validatedData = await StoreValidator({
        store_name: 'ddeee',
        detail: 'ddddddddddddddddddd',
        comment_review: 'Blog post contenttt',
        admin_id: '1',
        user_id: '1'
    })
    assert.equal(validatedData.error, undefined)
})

test('should receive object as first parameter from community validator', async({ assert }) => {
    const validatedData = await CommunityValidator({
        post: "this store is verygood",
        comment_post: "good review"
    })
    assert.isOk(validatedData)
})

test('should receive object as first parameter from admin validator', async({ assert }) => {
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

test('should return only  one error if single incorrect data is passed from admin validator', async({ assert }) => {
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

test('should return undefined when pass correct data from admin validator', async({ assert }) => {
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
