const express = require('express')
const app = express()
const port = 9002

app.get('/', (req, res) => {
  res.send(`Server SIT on port ${port}`)
})

app.get('/purchase*', (req, res) => {
  res.send(`HAProxy routing  to Server 2 on port ${port}`)
})

app.post('/sit/int/cash/*', (req, res) => {
  res.send('POST to SIT server')
})

app.listen(port, () => {
  console.log(`Started server Server 2 on port ${port}`)
})