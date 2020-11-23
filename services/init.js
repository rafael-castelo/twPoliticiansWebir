const { loadDB } = require("./loadDatabase.js");

const init = async () => {
  await loadDB("Democrats");
  await loadDB("Republicans");
};

module.exports = { init };
