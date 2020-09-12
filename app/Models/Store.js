'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Store extends Model {
    static get primaryKey() {
        return 'store_id'
    }

    admin() {
        return this.belongsTo('App/Models/Admin')
    }
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Store