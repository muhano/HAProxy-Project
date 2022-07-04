const express = require('express')
const app = express()
const port = 9006

app.get('/', (req, res) => {
  res.send(`Server Authentication SIT on port ${port}`)
})

app.post('/sit/int/cash/oauth2/token', (req, res) => {
  res.send('Request token to SIT server')
})

app.listen(port, () => {
  console.log(`Started server Authentication SIT on port ${port}`)
})