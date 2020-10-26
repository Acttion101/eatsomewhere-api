'use strict'

const { test, trait } = use('Test/Suite')('Insert Test')

const urlUsers = "/api/v2/users"
const UserModel = use('App/Models/User')

const urlAdmins = "/api/v2/admins"
const AdminModel = use('App/Models/Admin')

const urlCommunity = "/api/v2/communitys"
const CommunityModel = use('App/Models/Community')

const urlNews = "/api/v2/news"
const NewsModel = use('App/Models/News')

const urlStore = "/api/v2/stores"
const StoreModel = use('App/Models/Store')

trait("Test/ApiClient");

test('should insert value to user table', async ({ client }) => {
  const user = {
        first_name: "John",
        last_name: "Doe",
        age: '20',
        username: "Johnlnwza",
        password: "12345678",
        status: "user"
  }
  const response = await client.post(urlUsers).send(user).end()
  response.assertStatus(200)
})

test('should insert value to admin table', async ({ client }) => {
    const admin = {
        first_name: "John",
        last_name: "Doe",
        age: '20',
        admin_name: "Johnlnwzazaa",
        password: "12345678",
        status: "admin"
    }
    const response = await client.post(urlAdmins).send(admin).end()
    response.assertStatus(200)
  })
test('should insert value to community table', async ({ client }) => {
    const user = {
          post: "John",
          comment_post:"goodd"
    }
    const response = await client.post(urlUsers).send(user).end()
    response.assertStatus(200)
  })
  test('should insert value to news table', async ({ client }) => {
      const user = {
            update_news_id:"1"
      }
      const response = await client.post(urlUsers).send(user).end()
      response.assertStatus(200)
    })
    test('should insert value to store table', async ({ client }) => {
      const user = {
            store_name: "actshop",
            detail: "lowpice",
            comment_review: "good"
      }
      const response = await client.post(urlUsers).send(user).end()
      response.assertStatus(200)
    })
