const express = require('express')
const app = express()
const url = new URL('http://localhost:8080/')

app
  .get('/', (req, res) => console.log('Hello'))
  .listen(url.port, () => console.log(`Server is running on ${url.port}`))