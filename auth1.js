const express = require('express')
const app = express()
const port = 9005

app.get('/', (req, res) => {
  res.send(`Server Authentication Development on port ${port}`)
})

app.post('/dev/int/cash/oauth2/token', (req, res) => {
  res.send('Request token to Development server')
})

app.listen(port, () => {
  console.log(`Started server Authentication Development on port ${port}`)
})