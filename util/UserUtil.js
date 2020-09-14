class UserUtil {

    constructor(UserModel) {
        this._User = UserModel
    }

    getAll(references) {
        const users = this._User.query()

        return this._withReference(users, references)
            .fetch()
    }

    getById(userId, references) {
        const user = this._User
            .query()
            .where('user_id', userId)

        return this._withReference(user, references)
            .fetch()
            .then(response => response.first())
    }

    async create(userInstance, references) {
        const { user_id } = await this._User.create(userInstance)
        const user = this._User
            .query()
            .where('user_id', user_id)

        return this._withReference(user, references)
            .fetch()
            .then(response => response.first())
    }

    _withReference(instance, references) {
        if (references) {
            const extractedReferences = references.split(",")
            instance.with(extractedReferences)
        }

        return instance
    }
}
module.exports = UserUtill