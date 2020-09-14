'use strict'

const { test } = use('Test/Suite')('Community Validator')
const CommunityValidator = require('../../service/CommunityValidator')

test('should receive object as first parameter', async ({ assert }) => {
    const validatedData = await CommunityValidator({
      post: "this store is verygood",
      comment_post:"good review"
    })
    assert.isOk(validatedData)
})
  

