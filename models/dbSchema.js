const mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        trim: true
    },
    status:{
        type: String,
        required: true,
        trim: true
    }
})
var ListModel = mongoose.model('toDoList',Schema);

module.exports = ListModel;