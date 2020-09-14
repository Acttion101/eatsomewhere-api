module.exports = function (UserModel, user_id) {
    return UserModel.create({
      user_id,
      first_name: "John",
      last_name: "Doe",
        age: '20',
        user_name: "Johnlnwza",
        password: "12345678",
        status: "user"
    }).then((response) => response["$attributes"])
}