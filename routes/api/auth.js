const express = require('express');
const router = express.Router();

//@route   GET api/auth
//@desc    Test route
//@access  Public //dont need acces token with public

router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;