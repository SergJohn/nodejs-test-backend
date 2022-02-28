const express = require('express'),
router = express.Router();

var tasksCtrl = require('./tasks-controller');

// GET
router.get('/tasks/:id', tasksCtrl.getTask);

router.get('/tasks?limit=N', tasksCtrl.getNTasks);

// POST
router.post('/tasks', tasksCtrl.createTask);

// PUT
router.put('tasks/status', tasksCtrl.updateStatus);


module.exports = router;