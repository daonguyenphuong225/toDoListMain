const express = require('express');
const router = express.Router();
const toDoListController = require('../controller/toDoListController')




router.post ('',toDoListController.create)

router.get('/list',toDoListController.getList)

router.post('/delete/:id', toDoListController.delete);

router.post('/update/:id',toDoListController.update)

router.post('/moveToDoing/:id',toDoListController.moveToDoing);

router.post('/moveToDone/:id',toDoListController.moveToDone);

module.exports = router;