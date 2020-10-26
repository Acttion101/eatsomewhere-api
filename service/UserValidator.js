const Validator = use("Validator");
module.exports = async function UserValidator(data) {
  if (typeof data !== "object") throw new Error();
  const {
    first_name,
    last_name,
    age,
    day_month_year,
    username,
    password,
    status,
  } = data;
  const rules = {
    first_name: "required",
    last_name: "required",
    age: "required",
    day_month_year: "required",
    username: "required",
    password: "required|min:8",
    status: "required",
  };

  const validation = await Validator.validateAll(
    {
      first_name,
      last_name,
      age,
      day_month_year,
      username,
      password,
      status,
    },
    rules
  );

  return {
    error: validation.messages(),
  };
};
