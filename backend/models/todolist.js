const mongoose = require('mongoose')

const todolistSchema = mongoose.Schema({
 description: String,
 status: {type:String, enum:['completed','ongoing']}
});

const descriptionData = mongoose.model('todolist',todolistSchema);
module.exports = descriptionData;