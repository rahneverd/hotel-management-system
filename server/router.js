const router = require('express').Router()

// Home Route - GET
router.get('/', (req, res) => {
  res.send('Welcome to Hotel Management System')
})

module.exports = router