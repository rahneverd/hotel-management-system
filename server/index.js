const express = require('express')
const router = require('./router')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router)



app.listen(process.env.PORT, ()=> {
  console.log(`Server is running at port: ${process.env.PORT}`)
})