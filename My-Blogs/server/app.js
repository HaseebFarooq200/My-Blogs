const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config({path: './config.env'})

app.use(express.json());

//Accessing router folder 
app.use(require('./router/auth'))

require('./db/conn.js')
const PORT =process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server is running Successfully ")
})

