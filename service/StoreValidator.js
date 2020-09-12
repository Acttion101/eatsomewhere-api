const Validator = use('Validator')
module.exports = async function StoreValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { store_name, detail, comment_review, user_id, admin_id } = data
    const rules = {
        store_name: 'required',
        detail: 'required',
        comment_review: 'required',
        user_id: 'required',
        admin_id: 'required'

    }

    const validation = await Validator.validateAll({
        store_name,
        detail,
        comment_review,
        user_id,
        admin_id
    }, rules)

    return {
        error: validation.messages()
    }
}