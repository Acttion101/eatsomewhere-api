'use strict'
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Admin', (faker) => {

    return {
        first_name: faker.first(),
        last_name: faker.last(),
        admin_name: faker.word(),
        age: faker.age(),
        password: faker.word({ length: 8 }),
        status: faker.word()
    }
})

Factory.blueprint('App/Models/User', (faker) => {
     return {
        first_name: faker.first(),
         last_name: faker.last(), 
         age: faker.age(),
        username: faker.word(),
        password: faker.word({ length: 8 }),
        status: faker.word()
    }
 })

Factory.blueprint('App/Models/AdminUpdateNew', (faker) => {
    return {
        news: faker.sentence({ words: 4 }),
        detail: faker.sentence()
    }
})
  Factory.blueprint('App/Models/Community', (faker) => {
     return {
          post: faker.sentence({ words: 5 }),
          comment_post: faker.sentence()
       
      }
  })

   Factory.blueprint('App/Models/Store', (faker) => {
        return {         
            store_name: faker.name(),
            detail: faker.sentence(),
            comment_review: faker.sentence({ words: 5 })
       }
       })

//   Factory.blueprint('App/Models/News', (faker) => {
//      return {
//           admin_update_news: faker.sentence({ words: 4 })
        
//       }
//   })



