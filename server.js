const express = require('express')
const app = express()
const router = require("./router")
const routerOrders = require("./RouterOrders")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) =>{
    res.send('Hello World!')
})

app.use("/api", router)
app.use("/api", routerOrders)

module.exports = app; 