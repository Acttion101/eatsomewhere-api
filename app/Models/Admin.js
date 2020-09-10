'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')
class Admin extends Model {

    static boot() {
        super.boot()
        this.addHook('beforeSave', async(adminInstance) => {
            if (adminInstance.dirty.password) {
                adminInstance.password = await Hash.make(adminInstance.dirty.password)
            }
        })
    }
    static get primaryKey() {
        return 'admin_id'
    }
    update_news() {
        return this.hasMany('App/Models/AdminUpdateNew')
    }
    store() {
        return this.hasMany('App/Models/Store')
    }
}

module.exports = Admin