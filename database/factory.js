'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

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
        age:faker.age(),
        user_name:faker.word(),
        password:faker.word({ length: 8 }),
        status: faker.word()
    }
})

Factory.blueprint('App/Models/news', (faker) => {
    return {
        news: faker.word({ syllables: 5 }),
        detail: faker.paragraph({ sentences: 3 })
    }
})