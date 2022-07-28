const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    data:{type:Date, default:Date.now},
    image:{type:String, require:false}
})

module.exports = mongoose.model('Posts',PostSchema)