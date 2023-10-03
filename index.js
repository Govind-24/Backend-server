const express = require('express')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send("<h2>Govind Login</h2>")
  })
  app.get('/register', (req, res) => {
    res.send("<h2>User Register</h2>")
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
