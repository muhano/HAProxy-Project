const express = require('express')
const app = express()
const port = 9004

app.get('/', (req, res) => {
  res.send(`Server Production on port ${port}`)
})

app.post('/dc/int/cash/*', (req, res) => {
  res.send(`POST to Production server`)
})

app.listen(port, () => {
  console.log(`Started server Server 4 on port ${port}`)
})