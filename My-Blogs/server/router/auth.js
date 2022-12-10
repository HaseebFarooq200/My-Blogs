const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate.js')
const cookieParser =require("cookie-parser");

router.use(cookieParser())
require('../db/conn.js')
const User = require('../models/userSchema.js')


// POST Request for REGISTERATION
router.post('/register', async (req, res) => {

    // We acan access each tuple through object destructuring
    const { firstname, email, lastname, username, password, cnfrmpasword } = req.body;

    if (!firstname || !email || !lastname || !username || !password || !cnfrmpasword) {
        
        return res.status(422).json({ error: 'Complete your form' })
    }

    // Storing database through ASYNC AWAIT
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: 'User already registered' });
        }
        else if (password != cnfrmpasword) {
            return res.status(422).json({ error: 'Passwords dnt match' });
        }
        else {

            const user = new User({ firstname, email, lastname, username, password, cnfrmpasword });

            await user.save();
            res.status(201).json({ message: 'Email Registered Successfully' })
        }
    } catch (err) {
        console.log(err)
    }

})

// POST Request for SIGN IN
router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })

        }
        const userLogin = await User.findOne({ email: email })


        if (userLogin) {
            
            const token = await userLogin.generateAuthToken();
            

            // Dealing with cookies
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            if (password != userLogin.password) {

                res.status(400).json({ error: "Login error" });
            }
            else {
                res.json({ message: "User successfully loggged in " });

            }
        }
        else {
            res.status(400).json({ error: "Login error" });
        }
    }
    catch (err) {
        console.log(err);
    };
})

// GET request of ABOUTpage
// Here authenticate is a MiddleWare

router.get('/about', authenticate ,async (req,res) =>{
    res.send(req.rootUser)
})


// Logout Page
router.get('/logout', (req,res) =>{
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('User Logout Successfully')
})


module.exports = router
