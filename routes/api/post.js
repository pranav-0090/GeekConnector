const express = require('express');
const router = express.Router();

//@route   GET api/Post
//@desc    Test route
//@access  Public //dont need acces token with public

router.get('/', (req, res) => res.send('Post route'));

module.exports = router;