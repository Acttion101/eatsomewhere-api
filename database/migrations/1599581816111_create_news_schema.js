'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateNewsSchema extends Schema {
    up() {
        this.create('news', (table) => {
            table.increments("news_id", 5)
            table.integer("update_news_id", 5).notNullable().unsigned()
            table.foreign('update_news_id')
                .references('update_news.update_news_id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
    }

    down() {
        this.drop('news')
    }
}

module.exports = CreateNewsSchema