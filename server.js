const express = require('express')
const app = express()
const db = require('./dbConfig')
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use('/api', require('./routes/crud'))

app.listen(port, () => {
    console.log("Server is Running");
})