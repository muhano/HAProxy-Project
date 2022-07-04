const express = require('express')
const app = express()
const port = 9008

app.get('/', (req, res) => {
  res.send(`Server Authentication Production on port ${port}`)
})

app.post('/dc/int/cash/oauth2/token', (req, res) => {
  res.send('Request token to Production server')
})

app.listen(port, () => {
  console.log(`Started server Authentication Production on port ${port}`)
})