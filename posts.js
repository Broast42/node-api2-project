const express = require("express");
const db = require("./data/db");

const router = express.Router();

router.post("/", (req, res) => {
    if(!req.body.title || !req.body.contents){
        return res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
        })
    }else{
        db.insert(req.body)
            .then((post) => {
                res.status(201).json(post);
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({ 
                    error: "There was an error while saving the post to the database" 
                })
            });
    }
});

router.post("/:id/comments", (req, res) => {
    const id = req.params.id;
    if(!req.body.text){
        return res.status(400).json({
            errorMessage: "Please provide text for the comment." 
        })
    }
    db.findById(id)
        .then(post => {
            if(post.length === 0){
                res.status(404).json({
                    message: "The post with the specified ID does not exist."  
                })
            }else{
                db.insertComment(req.body);
                res.status(201).json(req.body);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "There was an error while saving the comment to the database" 
            })
        })
});

router.get("/", (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "The posts information could not be retrieved."
            })
        })
});

router.get("/:id", (req,res) =>{
    db.findById(req.params.id)
        .then(post => {
            if(!post.length === 0){
                res.status(200).json(post);
            }else{
                res.status(404).json({
                    message: "The post with the specified ID does not exist."  
                })
            }
            
        })
        .catch(err => {
            console.log(err);
            res.status(500),json({
                error: "The post information could not be retrieved." 
            })
        })
        
});


module.exports = router;