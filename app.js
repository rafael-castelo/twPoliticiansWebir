const express = require("express");
const app = express();
const port = 3000;

const { loadDB } = require("./services/loadDatabase.js");
const { relevantUser } = require("./services/relevantUser.js");
const test = async () => {
  await loadDB("Partido Nacional");
  await loadDB("Partido Colorado");
  await loadDB("Frente Amplio");
  await loadDB("Cabildo Abierto");
  const user = await relevantUser("frente_amplio", "Lacalle Pou");
};
test();

const tweetsRoutes = require("./api/v1/tweets");

app.use("/api/v1/tweets", tweetsRoutes);

app.listen(port, () => {
  console.log(`Webir app listening at http://localhost:${port}`);
});
