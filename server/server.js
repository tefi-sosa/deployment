const express = require('express')
const cors = require('cors')

require('dotenv').config()

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'f6f85acdb4314464a4c06cb1f9b83318',
  captureUncaught: true,
  captureUnhandledRejections: true
});

const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/css',function(req,res) {
  rollbar.log("Testing")
  res.sendFile(path.join(__dirname, '../client/styles.css'));
});

app.get('/js',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/main.js'));
});


const port = process.env.PORT || 4005
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})