'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateUserSchema extends Schema {
  up () {
    this.create('create_users', (table) => {
      table.increments('user_id')
      table.string('frist_name').notNullble()
      table.string('last_name').notNullble()
      table.string('age').notNullble()
      table.string('username').notNullble().unique()
      table.string('password').notNullble()
      table.string('status')
      table.timestsamps()
    })
  }

  down () {
    this.drop('create_users')
  }
}

module.exports = CreateUserSchema
