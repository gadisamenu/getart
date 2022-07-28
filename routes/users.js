var express = require('express');
const User = require('../models/User')
var router = express.Router();
const path = require('path-resolver');
const pathResolver = require('path-resolver');
// const mongoose = require('mongoose')

/* GET users listing. */
router.get('/', async (req, res, next)=>{
  try{
    const users  = await  User.find({})
    res.status(200).json(users)
  }
  catch(err){
    res.status(404).json(err.message)
  }})


  // GET a user by id
router.get('/:id', async (req, res, next) =>{
  try{
    const user  = await  User.findById(req.params.id)
    res.status(200).json(user)
  }
  catch(err){
    res.status(404).json(err.message)
  }
});


// add a user
router.post('/', async (req,res)=>{

  try{
    const image = req.files.image;
    const user = await User.create(req.body)
    image.mv(pathResolver(__dirname+"public/img"+image.name))
    res.status(201).json(user)
  }
  catch(err){
    res.status(404).json(err.message)
  }
})


// Update a user by id
router.patch('/:id',async (req,res)=>{
  try{
    const user  = await  User.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json(user)
  }
  catch(err){
    res.status(404).json(err.message)
  }
})

router.delete('/:id', async (req,res)=>{
  try{
    const user  = await  User.findByIdAndDelete(req.params.id)
    res.status(200).json(user)
  }
  catch(err){
    res.status(404).json(err.message)
  }
})

module.exports = router








