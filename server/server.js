const express = require('express')
const cors = require('cors')

require('dotenv').config()

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('client'))
app.use(`/css`, express.static(path.join(__dirname, '../client/styles.css')))

rollbar.log("hello world")
app.get('/',function(req,res) {

  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/styles.css'));
});

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/main.js'));
});


const port = process.env.PORT || 4005
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})