'use strict'

const { test } = use('Test/Suite')('Store Validator')
const StoreValidator = require('../../service/StoreValidator')

test('should receive object as first parameter', async({ assert }) => {
    const validatedData = await StoreValidator({
        store_name: 'ddeee',
        detail: 'ddddddddddddddddddd',
        comment_review: 'Blog post content',
        admin_id: '1',
        user_id: '1'
    })
    assert.isOk(validatedData)
})



test('should return undefined when pass correct data', async({ assert }) => {
    const validatedData = await StoreValidator({
        store_name: 'ddeee',
        detail: 'ddddddddddddddddddd',
        comment_review: 'Blog post contenttt',
        admin_id: '1',
        user_id: '1'
    })
    assert.equal(validatedData.error, undefined)
})