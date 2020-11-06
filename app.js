const express = require('express')
const app = express()
const port = 3000

const tweetsRoutes = require('./api/v1/tweets'); 

app.use('/api/v1/tweets', tweetsRoutes)

app.listen(port, () => {
  console.log(`Webir app listening at http://localhost:${port}`)
})

