const express = require("express");
const app = express();
const port = 3000;

const { init } = require("./services/init");

init();

const tweetsRoutes = require("./api/v1/tweets");
const queryRoutes = require("./api/v1/query");

app.use("/api/v1/tweets", tweetsRoutes);
app.use("/api/v1/query", queryRoutes);

app.listen(port, () => {
  console.log(`Webir app listening at http://localhost:${port}`);
});
