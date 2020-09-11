'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Userdatum extends Model {
    static get primaryKey() {
        return 'user_id'
    }
}


module.exports = Userdatum
