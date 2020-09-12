'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')
class User extends Model {

  static boot () {
    super.boot()
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
  static get primaryKey() {
    return 'user_id'
  }
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }

 
}

module.exports = User
