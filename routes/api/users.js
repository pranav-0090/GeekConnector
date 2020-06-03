const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User'); //get User Model
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

//@route   POST api/users
//@desc    Register Uset
//@access  Public //dont need acce s token with public

//1=====handle post from user ============================
//add check as second parameter within [] bracket to run check function
router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
    async (req, res) => {
        //for req.body, init middleware for body parser included in express
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        //==2=====================================================

        // pullout things from req.body
        const { name, email, password } = req.body;
        try {
            // See if User exists
            let user = await User.findOne({ email });
            if (user) {
                return res
                    .status()
                    .json({ errors: [{ msg: 'User already exists' }] });
            }
            // Get users gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            //create new instance of user to be saved later
            user = new User({
                name,
                email,
                avatar,
                password
            });

            //Encrypt password: using bcrypt hashing 10 rounds
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Return jsonwebtoken


            res.send('Users route'); // if all validations done
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

        //==========================================================
    });

module.exports = router;