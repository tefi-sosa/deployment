const express = require('express')
const cors = require('cors')

const path = require('path')

// app.use(cors())
// app.use(express.json())
const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 4005
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})