'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunitySchema extends Schema {
  up () {
    this.create('communities', (table) => {
      table.increments('community_id', 5)
      table.string('post').notNullable()
      table.string('comment_post').notNullable()
      table.integer('user_id').unsigned()
      table.integer('admin_id').unsigned()
      table
          .foreign('user_id')
          .references('users.user_id')
      table
          .foreign('admin_id')
          .references('admins.admin_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('communities')
  }
}

module.exports = CommunitySchema
