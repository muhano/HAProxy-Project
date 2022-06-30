const express = require('express')
const app = express()
const port = 9003

app.get('/', (req, res) => {
  res.send('Server 3 on port 9003')
})

app.get('/inquiry*', (req, res) => {
  res.send('HAProxy routing  to Server 3 on port 9003')
})

app.listen(port, () => {
  console.log(`Started server Server 3 on port ${port}`)
})