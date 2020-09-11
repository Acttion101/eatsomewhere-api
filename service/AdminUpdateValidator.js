const Validator = use('Validator')
module.exports = async function AdminUpdateValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { news, detail } = data
    const rules = {
        news: 'required',
        detail: 'required',

    }

    const validation = await Validator.validateAll({
        news,
        detail,
    }, rules)

    return {
        error: validation.messages()
    }
}