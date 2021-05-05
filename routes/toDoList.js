const express = require('express');
const router = express.Router();
const toDoListController = require('../controller/toDoListController')




router.post ('/',toDoListController.create)

router.get('/list',toDoListController.getList)

router.post('/update/:id',toDoListController.update)

router.post('/delete/:id', toDoListController.delete);

module.exports = router;