'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdminUpdateNew extends Model {

    static get primaryKey() {
        return 'admin_update_id'
    }
    admin() {
        return this.belongsTo('App/Models/Admin')
    }
    news() {
        return this.hasMany('App/Models/News')
    }
}

module.exports = AdminUpdateNew