const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) => {
  res.send(`Server Development on port ${port}`)
})

app.get('/token*', (req, res) => {
  res.send(`HAProxy routing  to Server 1 on port ${port}`)
})

app.post('/dev/int/cash/*', (req, res) => {
  res.send('POST to Development server')
})

// app.post('/dev/int/cash/oauth2/token', (req, res) => {
//   res.send('Request token to Development server')
// })

app.listen(port, () => {
  console.log(`Started server Server 1 on port ${port}`)
})