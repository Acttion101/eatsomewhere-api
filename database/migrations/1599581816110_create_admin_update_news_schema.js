'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateAdminUpdateNewsSchema extends Schema {
    up() {
        this.create('admin_update_news', (table) => {
            table.increments("update_news_id", 5)
            table.string("news", 120).notNullable()
            table.string("detail").notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('admin_update_news')
    }
}

module.exports = CreateAdminUpdateNewsSchema