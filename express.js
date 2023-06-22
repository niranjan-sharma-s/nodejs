//import express module
const express = require('express')

//init express
const app = express()

//create endpoints / route handlers
app.get("/" , (req , res) => {
    res.send("Hello World")
})

//listen on a port
const server = app.listen(5000 , () => {
    console.log("server listening on port 5000")
})


//close server
setTimeout(() => {
    console.log("server closed")
    server.close()
},5000) 
