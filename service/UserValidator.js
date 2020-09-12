const Validator = use('Validator')
module.exports = async function adminValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { first_name, last_name, age, user_name, password, status } = data
    const rules = {
        first_name: 'required',
        last_name: 'required',
        age: 'required',
        user_name: 'required',
        password: 'required|min:8',
        status: 'required',
    }

    const validation = await Validator.validateAll({
        first_name,
        last_name,
        age,
        user_name,
        password,
        status,
    }, rules)

    return {
        error: validation.messages()
    }
}