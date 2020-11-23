const { loadDB } = require("./loadDatabase.js");
const { search } = require("../helpers/database.js");
const { relevantUser } = require("./relevantUser.js");

const init = async () => {
  await loadDB("Democrats");
  await loadDB("Republicans");
};

module.exports = { init };
