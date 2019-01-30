const express = require('express');
const router = express.Router();
const Post = require('../models/posts');




// index route for posts
router.get('/', async (req, res, next) => {
    
    try{
        const allPosts = await Post.find();
        console.log(allPosts, 'Here be our index route')
        res.json({
            status: 200,
            data: allPosts
        });
    } catch(err){
        console.log(err, "ERROR ERROR ERROR")
        res.json({
            status: 500
        })
    }
    next;
});



// new post route 
router.post('/', async (req, res) => {
    try{
        const newSkiPost = await Post.create(req.body);
        console.log(newSkiPost, "you're building a post");

        res.json({
            status: 200,
            data: newSkiPost
        })
    } catch(err) {
        console.log(err, "WE HAVE AN ERROR HERE!!!!!")

        res.json({
            status: 500
        })
    }
})


// edit post route
router.get('/:id', async (req, res, next) => {

    try{
        const foundPost = await Post.findById(req.params.id);
        
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
        const updatedSkiPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
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
        const deleteSkiPost = await Post.findByIdAndRemove(req.params.id)

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