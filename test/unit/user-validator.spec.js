'use strict'

const { test } = use('Test/Suite')('User Validator')
const UserValidator = require('../../service/UserValidator')

test('should return error with incorrect data that required from user validator', async ({ assert }) => {
    const data = {
        first_name: "John",
        last_name: "Doe",
          age: '20',
          user_name: "Johnlnwza",
          password: "12345678",
          status: "user"
    }
    const user = await UserValidator(data)
    assert.isOk(user.error,'user error')
  })

test('should receive object as first parameter', async ({ assert }) => {
    const validatedData = await UserValidator({
      first_name: "John",
      last_name: "Doe",
        age: '20',
        user_name: "Johnlnwza",
        password: "12345678",
        status: "user"
    })
    assert.isOk(validatedData)

//   const validatedData2 = await UserValidator("John", "Doe", "20","Johnlnwza","12345678", "user")
//   assert.isNotOk(validatedData2)
})  
  test('should return undefined when pass correct data', async ({ assert }) => {
    const validatedData = await UserValidator({
        first_name: "John",
        last_name: "Doe",
        age: '20',
        user_name: "Johnlnwza",
        password: "12345678",
        status: "user"
    })
  
    assert.isArray(validatedData.error, undefined)
  })


