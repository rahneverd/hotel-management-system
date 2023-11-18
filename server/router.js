const router = require('express').Router()
const userControler = require('./controllers/userControler')

// Home Route - GET
router.get('/', (req, res) => {
  res.send('Welcome to Hotel Management System')
})

// USER routes
router.post('/user/signup', userControler.register)
router.post('/user/login', (req, res) => {
  res.send('Logging in User')
})
router.post('/user/update', (req, res) => {
  res.send('Registering User')
})
router.post('/user/delete', (req, res) => {
  res.send('Registering User')
})

module.exports = router