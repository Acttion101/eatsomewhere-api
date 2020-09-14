module.exports = function (AdminModel, admin_id) {
    return AdminModel.create({
      admin_id,
      first_name: "John",
      last_name: "Doe",
      age: '20',
      admin_name: "Johnlnwzazaa",
      password: "12345678",
      status: "admin"
    }).then((response) => response["$attributes"])
}
  