const { loadDB } = require("./loadDatabase.js");
const { search } = require("../helpers/database.js");

const init = async () => {
  await loadDB("Democrats");
  await loadDB("Republicans");

  const res = await search("republicans", "covid");

  console.log(res);
};

module.exports = { init };
