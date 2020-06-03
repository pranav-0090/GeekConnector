const express = require('express');
const router = express.Router();

//@route   GET api/Profiles
//@desc    Test route
//@access  Public //dont need acces token with public

router.get('/', (req, res) => res.send('Profiles route'));

module.exports = router;