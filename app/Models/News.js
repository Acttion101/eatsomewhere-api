'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class News extends Model {

    static get primaryKey() {
        return 'new_id'
    }
    update_news() {
        return this.belongsTo('App/Models/AdminUpdateNews')
    }
}

module.exports = News