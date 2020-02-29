var axios = require("axios")


const api = {
  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    axios.get(queryURL)
    .then(function(res) {
    console.log(res.data);
  });
}
}
module.exports = api;
