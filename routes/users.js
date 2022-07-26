var express = require('express');
// const User = require('../models/User')
var router = express.Router();
const mongoose = require('mongoose')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',(req,res)=>{
  console.log(req.body)
})
module.exports = router;
