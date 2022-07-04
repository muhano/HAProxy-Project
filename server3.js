const express = require('express')
const app = express()
const port = 9003

app.get('/', (req, res) => {
  res.send(`Server UAT on port ${port}`)
})

app.get('/inquiry*', (req, res) => {
  res.send(`HAProxy routing  to Server 3 on port ${port}`)
})

app.post('/uat/int/cash', (req, res) => {
  res.send('POST to UAT server')
})


app.listen(port, () => {
  console.log(`Started server Server 3 on port ${port}`)
})