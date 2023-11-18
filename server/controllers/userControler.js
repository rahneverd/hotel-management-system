const User = require('../models/User')

exports.register =(req, res) => {
  console.log(req.body.data)
  let user = new User(req.body.data)
  user.register()
  res.send('Registreing user')
}