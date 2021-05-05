const toDoListModel = require('../models/dbSchema.js')

exports.getList = function (req, res) {

    toDoListModel.find({})
        .then(function (data) {
            let listData = {
                listData: data,
                listStatus: [
                    {
                        title: 'To do',
                        value: 'toDo'
                    },
                    {
                        title: 'Doing',
                        value: 'doing'
                    },
                    {
                        title: 'Done',
                        value: 'done'
                    }
                ]
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
            return res.redirect('/list')
        }
    })
}

exports.update = function (req, res) {
    toDoListModel.updateOne(
        { _id: req.params.id },
        {
            content: req.body.content,
            status: req.body.status
        })
        .then(function () {
            return res.redirect('/list')
        })
        .catch(function (err) {
            console.log(err);
        })
}

exports.delete = function (req, res) {
    toDoListModel.deleteOne({ _id: req.params.id })
        .then(function () {
            return res.redirect('/list')
        })
        .catch(function (err) {
            console.log(err);
        })
}
