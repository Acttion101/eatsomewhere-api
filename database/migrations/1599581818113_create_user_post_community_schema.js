'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateUserPostCommunitySchema extends Schema {
  up () {
    this.create('create_user_post_communities', (table) => {
      table.increments('user_id')
      table.string('frist_name')
      table.string('last_name')
      table.string('age')
      table.string('user_name')
      table.timestamps()
    })
  }

  down () {
    this.drop('create_user_post_communities')
  }
}

module.exports = CreateUserPostCommunitySchema
