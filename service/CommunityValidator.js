const Validator = use('Validator')
module.exports = async function AdminUpdateValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { post,comment_post  } = data
    const rules = {
        post: 'required',
        comment_post: 'required',

    }

    const validation = await Validator.validateAll({
       post,comment_post,
    }, rules)

    return {
        error: validation.messages()
    }
}