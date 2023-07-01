const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    }
});

module.exports = mongoose.model('Notes',userSchema)