const { loadDB } = require("./loadDatabase.js");
const { search } = require("../helpers/database.js");

const init = async () => {
  await loadDB("Partido Nacional");
  await loadDB("Partido Colorado");
  await loadDB("Frente Amplio");
  await loadDB("Cabildo Abierto");
  const res = await search("frente_amplio", "Lacalle Pou");
  console.log(res);
};

module.exports = { init }