'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCommunitySchema extends Schema {
  up () {
    this.create('create_communities', (table) => {
      table.increments('communities_id')
      table.string('post')
      table.string('comment_post')
      table.timestamps()
    })
  }

  down () {
    this.drop('create_communities')
  }
}

module.exports = CreateCommunitySchema
