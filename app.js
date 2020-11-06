const express = require("express");
const app = express();
const port = 3000;

const { loadDB } = require("./services/loadDatabase.js");
const { search } = require("./helpers/database.js");
const test = async () => {
  await loadDB("Partido Nacional");
  await loadDB("Partido Colorado");
  await loadDB("Frente Amplio");
  await loadDB("Cabildo Abierto");
  const res = await search("frente_amplio", "Lacalle Pou");
  console.log(res);
};
test();

const tweetsRoutes = require("./api/v1/tweets");

app.use("/api/v1/tweets", tweetsRoutes);

app.listen(port, () => {
  console.log(`Webir app listening at http://localhost:${port}`);
});
