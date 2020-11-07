const express = require("express");
const app = express();
const port = 3000;

const { init } = require("./services/init");

//init();

const tweetsRoutes = require("./api/v1/tweets");
const relevantTweetsRoutes = require("./api/v1/relevantTweets");
const relevantUserRoutes = require("./api/v1/relevantUser");

app.use("/api/v1/tweets", tweetsRoutes);
app.use("/api/v1/relevantTweets", relevantTweetsRoutes);
app.use("/api/v1/relevantUser", relevantUserRoutes);

app.listen(port, () => {
  console.log(`Webir app listening at http://localhost:${port}`);
});
