import express from 'express'
var router = express.Router()
// const taskController = require('../controllers/taskController');
import TaskController from '../src/infrastructure/api/controllers/task/task.controller';

const taskController = new TaskController();

router.get('/list', taskController.list);
router.get('/one/:id', taskController.getOne);
router.post('/create', taskController.create);
// router.post('/update', auth, taskController.update);
router.delete('/delete/:id', taskController.delete);

export default router
