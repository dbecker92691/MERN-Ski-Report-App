const express = require('express');
const router = express.Router();
const User = require('../models/users');


// log in new user
router.post('/', async (req, res) => {
    try{
        const user = await User.create(req.body);
        console.log(req.body, "<--- user log in req.body")
        req.session.logged = true;
        req.session.username = req.body.username;

        res.json({
            status: 200,
            data: 'you are now logged in'
        })
    } catch(err){
        console.log(err, "User creating error")
        res.json({
            status: 500
        })
    }
})


module.exports = router;