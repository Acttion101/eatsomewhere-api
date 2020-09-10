'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCommunitySchema extends Schema {
    up() {
        this.create('communities', (table) => {
            table.increments('communities_id', 5)
            table.string('post').notNullable()
            table.string('comment_post').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('communities')
    }
}

module.exports = CreateCommunitySchema