const { loadDB } = require("./loadDatabase.js");
const { search } = require("../helpers/database.js");
const { relevantUser } = require("./relevantUser.js");

const init = async () => {
  await loadDB("Democrats");
  await loadDB("Republicans");

  // Testing
  const res = await search("republicans", "covid");
  const user = await relevantUser("republicans", "covid");
  console.log("Tweets recuperados: ", res);
};

module.exports = { init };
