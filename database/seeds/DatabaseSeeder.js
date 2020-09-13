'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
    async run() {
        const admin = await Factory
            .model('App/Models/Admin')
            .createMany(10)

        const user = await Factory
            .model('App/Models/User')
            .createMany(10)

        const community = await Factory
            .model('App/Models/Community')
            .createMany(10)

        const adminupdatenew = await Factory
            .model('App/Models/AdminUpdateNew')
            .createMany(10)

        const store = await Factory
            .model('App/Models/Store')
            .createMany(10)

        const news = await Factory
            .model('App/Models/News')
            .createMany(10)


    }



}

module.exports = DatabaseSeeder