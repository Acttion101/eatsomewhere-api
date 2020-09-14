'use strict'

const { test } = use('Test/Suite')('Update New Validator')
const AdminUpdateValidator = require('../../service/AdminUpdateValidator')

test('should receive object as first parameter', async({ assert }) => {
    const validatedData = await AdminUpdateValidator({
        news: 'ddeee',
        detail: 'ddddddddddddddddddd',
    })
    assert.isOk(validatedData)
})




test('should return undefined when pass correct data', async({ assert }) => {
    const validatedData = await AdminUpdateValidator({
        news: 'ddeee',
        detail: 'ddddddddddddddddddd',
    })
    assert.equal(validatedData.error, undefined)
})