'use strict'

const { test } = use('Test/Suite')('Store Util')

const StoreUtil = require("../../util/StoreUtil")
const MockStoreModel = use("App/Models/Store")


test("should get all stores", async({ assert }) => {
    const storeUtil = new StoreUtil(MockStoreModel);
    const stores = await storeUtil.getAll()
    assert.isObject(stores)
})