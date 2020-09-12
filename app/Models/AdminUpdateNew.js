'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdminUpdateNew extends Model {

    static get primaryKey() {
        return 'update_news_id'
    }

    news() {
        return this.hasMany('App/Models/News')
    }
}

module.exports = AdminUpdateNew