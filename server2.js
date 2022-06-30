const express = require('express')
const app = express()
const port = 9002

app.get('/', (req, res) => {
  res.send('Server 2 on port 9002')
})

app.get('/purchase*', (req, res) => {
  res.send('HAProxy routing  to Server 2 on port 9002')
})

app.listen(port, () => {
  console.log(`Started server Server 2 on port ${port}`)
})