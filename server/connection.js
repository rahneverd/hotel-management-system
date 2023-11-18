const mysql = require('mysql2')
const app = require('./index')
const dotenv = require('dotenv').config()


console.log('CREATING CONFIG')
let con = mysql.createConnection({
  host:process.env.DBHOST,
  user:process.env.DBUSER,
  password:process.env.DBPASS,
  database:process.env.DBNAME 
})

console.log('CONNECTING TO DB')
con.connect((err) => {
  if (!err) {
    console.log('DB connected successfully')
    app.listen(process.env.PORT, () => {
      console.log(`App is running at ${process.env.PORT}`)
    })
  } else {
    console.log(err)
  }
})