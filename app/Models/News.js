'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class News extends Model {

    static get primaryKey() {
        return 'news_id'
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
    admin_update_new() {
        return this.belongsTo('App/Models/AdminUpdateNew')
    }
}

module.exports = News