const User = require('../models/User')

exports.register =async (req, res) => {
  // console.log(req.body.data)
  try {
  let user = new User(req.body.data)
  await user.register()
  res.send('Success')
  } catch (error) {
    res.send(user.errors[0])
  }
  // res.send('Registreing user')
}