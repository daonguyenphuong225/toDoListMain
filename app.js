const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const toDoListRouter = require('./routes/toDoList.js');
const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/toDoList', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log('connected');
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

app.use('/routes',toDoListRouter)

app.listen(8000,()=>{
    console.log('server abc chay cong 8000');
})

