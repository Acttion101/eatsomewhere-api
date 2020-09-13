const Validator = use('Validator')
module.exports = async function NewValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { update_news_id } = data
    const rules = {
        update_news_id: 'required',

    }

    const validation = await Validator.validateAll({
        update_news_id,
    }, rules)

    return {
        error: validation.messages()
    }
}