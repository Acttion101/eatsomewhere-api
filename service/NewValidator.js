const Validator = use('Validator')
module.exports = async function NewValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { admin_update_news } = data
    const rules = {
        admin_update_news: 'required',

    }

    const validation = await Validator.validateAll({
        admin_update_news,
    }, rules)

    return {
        error: validation.messages()
    }
}