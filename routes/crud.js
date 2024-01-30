const express = require('express')
const router = express.Router()
const {collection} = require('../dbConfig/index')

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('API')
})

module.exports = router