const express = require('express')
// const mongoose = require('mongoose')
const Posts =  require('../models/Post')

const router = express.Router()


router.get('/',async (req,res)=>{
    try{
        const posts = await Posts.find({})
        res.status(200).json(posts)
    }
    catch(err){
        res.status(404).send(err.message)
    }
})

router.get('/:id', async (req,res)=>{
    try{
        const post =  await Posts.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.patch('/:id', async (req,res)=>{
    try{
        const post = await Posts.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json(post)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const post = await Posts.findByIdAndRemove(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.post('/', async (req,res)=>{
    try{
        const post = await Posts.create(req.body)
        console.log(req.body)
        console.log(post)
        res.status(200).json(post)
    }
    catch(err){
        res.status(400).send(err.message)
    }

})


// router.param("/:id",(req,res,next)=>{
//     console.log(req.params)
//     next()
// })


module.exports = router