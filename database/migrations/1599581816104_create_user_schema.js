'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateUserSchema extends Schema {
    up() {
        this.create('users', (table) => {
            table.increments('user_id', 5)
            table.string('first_name', 150).notNullable()
            table.string('last_name', 150).notNullable()
            table.integer('age', 3).notNullable()
            table.string('username', 100).notNullable().unique()
            table.string('password').notNullable()
            table.string('status', 10)
            table.timestamps()
        })
    }

    down() {
        this.drop('users')
    }
}

module.exports = CreateUserSchema