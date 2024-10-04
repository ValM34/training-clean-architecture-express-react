import express from 'express'
var router = express.Router()
// const taskController = require('../controllers/taskController');
import { getAll } from '../controllers/taskController';

console.log('kjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')

router.get('/all', getAll);
console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
// router.get('/one/:id', auth, taskController.getOneById);
// router.post('/create', auth, taskController.create);
// router.post('/update', auth, taskController.update);
// router.delete('/delete', auth, taskController.delete);

export default router
