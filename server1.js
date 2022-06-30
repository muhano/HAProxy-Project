const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) => {
  res.send('Server 1 on port 9001')
})

// app.get('/token', (req, res) => {
//   res.send('HAProxy routing  to Server 1 on port 9001')
// })

app.get('/token*', (req, res) => {
  res.send('HAProxy routing  to Server 1 on port 9001')
})


app.listen(port, () => {
  console.log(`Started server Server 1 on port ${port}`)
})