'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Community extends Model {
    static get primaryKey() {
        return 'community_id'
    }
}

module.exports = Community
