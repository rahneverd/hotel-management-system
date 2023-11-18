const express = require('express')
const router = require('./router')
// const mySql = require('mysql2')
const app = express()

// FOR DB CONN
// let con = mySql.createConnection({
//   host:process.env.DBHOST,
//   user:process.env.DBUSER,
//   password:process.env.DBPASS,
//   database:process.env.DBNAME
// })


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router)

module.exports = app
// app.listen(process.env.PORT, ()=> {
//   console.log(`Server is running at port: ${process.env.PORT}`)
// })