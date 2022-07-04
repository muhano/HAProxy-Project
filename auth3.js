const express = require('express')
const app = express()
const port = 9007

app.get('/', (req, res) => {
  res.send(`Server Authentication UAT on port ${port}`)
})

app.post('/uat/int/cash/oauth2/token', (req, res) => {
  res.send('Request token to UAT server')
})

app.listen(port, () => {
  console.log(`Started server Authentication UAT on port ${port}`)
})