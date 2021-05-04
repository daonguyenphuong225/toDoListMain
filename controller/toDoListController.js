const toDoListModel = require('../models/dbSchema.js')

exports.getList = function (req, res) {

    toDoListModel.find({})
        .then(function (data) {
            let listData = {
                listData: data
            }
            res.render('List/toDoList', listData)
        })
        .catch(function (err) {
            console.log(err);
        })
}


exports.create = function (req, res) {
    var list = new toDoListModel(req.body);
    list.save(function (err) {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.redirect('/routes/list')
        }
    })
}

exports.delete = function (req, res) {
    toDoListModel.deleteOne({ _id: req.params.id })
        .then(function () {
            return res.redirect('/routes/list')
        })
        .catch(function (err) {
            console.log(err);
        })
}

exports.update = function (req, res) {
    toDoListModel.updateOne({ _id: req.params.id }, { content: req.body.content })
        .then(function () {
            return res.redirect('/routes/list')
        })
        .catch(function (err) {
            console.log(err);
        })
}

exports.moveToDoing = function (req, res) {
    toDoListModel.updateOne({ _id: req.params.id }, { status: 'doing' })
        .then(function () {
            return res.redirect('/routes/list')
        })
        .catch(function (err) {
            console.log(err);
        })
}
exports.moveToDone = function (req, res) {
    toDoListModel.updateOne({ _id: req.params.id }, { status: 'done' })
        .then(function () {
            return res.redirect('/routes/list')
        })
        .catch(function (err) {
            console.log(err);
        })
}