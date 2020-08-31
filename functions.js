const axios = require("axios");

const functions = {
  verifyPasswordsLength: (password) => (password.length > 6 ? true : false),
  fetchUser: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((result) => result.data)
      .catch((err) => "error");
  },
};
module.exports.funcs = functions;

module.exports.emailDB = [
  "Omachhouty@naxxum.fr",
  "Omar@gmail.com",
  "Omar@mach.com",
];
module.exports.email = "Omar@email.com";
module.exports.password = "Omar@Password";
