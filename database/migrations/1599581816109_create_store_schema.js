'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateStoreSchema extends Schema {
    up() {
        this.create('stores', (table) => {
            table.increments('store_id', 5)
            table.string('store_name', 150).notNullable()
            table.string('detail', 150).notNullable()
            table.string('comment_review', 100).notNullable()
            table.integer('user_id').unsigned()
            table.integer('admin_id').unsigned()
            table.foreign('user_id')
                .references('users.user_id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            table.foreign('admin_id')
                .references('admins.admin_id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('stores')
    }
}

module.exports = CreateStoreSchema