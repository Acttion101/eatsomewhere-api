'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateUserPostCommunitySchema extends Schema {
    up() {
        this.create('user_post_communities', (table) => {
            table.increments('id', 5)
            table.integer('user_id').notNullable().unsigned()
            table.integer('communities_id').notNullable().unsigned()
            table
                .foreign('user_id')
                .references('users.user_id')
            table
                .foreign('community_id')
                .references('communities.communities_id')
        })
    }

    down() {
        this.drop('user_post_communities')
    }
}

module.exports = CreateUserPostCommunitySchema