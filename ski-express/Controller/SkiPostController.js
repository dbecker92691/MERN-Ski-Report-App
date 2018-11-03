const express = require('express');
const router = express.Router();
const SkiPost = require('../models/posts');



// index route for posts
router.get('/', async (req, res, next) => {
    console.log(req.body, 'Here be our get route')
    try{
        const allPosts = await SkiPost.find();

        res.json({
            status: 200,
            data: allPosts
        });
    } catch(err){
        res.json({
            status: 500
        })
    }
});



// new post route 
router.post('/', async (req, res) => {
    try{
        console.log(req.body, "wrek dat body");
        const newSkiPost = await SkiPost.create(req.body);
        console.log("you're building a post");

        res.json({
            status: 200,
            data: newSkiPost
        })
    } catch(err) {
        console.log(err)

        res.json({
            status: 500
        })
    }
})


// edit post route
router.get('/:id', async (req, res, next) => {

    try{
        const foundPost = await SkiPost.findById(req.params.id);
        
        res.json({
            status: 200,
            data: foundPost
        })
    } catch(err) {
        console.log(err, "THIS IS WHY WE CAN'T GET");
        res.json({
            status: 500
        })
    }
})


router.put('/:id', async (req, res) => {
    
    try {
        const updatedSkiPost = await SkiPost.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updatedSkiPost, "these are our updates");

        res.json({
            status: 200,
            data: updatedSkiPost
        })
    } catch(err){
        console.log(err);
        res.json({
            status: 500
        })
    }
});


// delete post route 
router.delete('/:id', async (req, res) => {

    try {
        const deleteSkiPost = await SkiPost.findByIdAndRemove(req.params.id)

        res.json({
            status: 200,
            data: deleteSkiPost
        })
    } catch(err){
        console.log(err);
        
        res.json({
            status: 500
        })
    }
})



module.exports = router;