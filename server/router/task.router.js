const router = require("express").Router();
const taskController = require('../controllers/task.controller');

router.get('/:id', taskController.getTask);
router.get('/all/house/:houseId', taskController.getAllHouseTasks);
router.get('/all/user/:userId', taskController.getAllUserTasks);

router.post('/', taskController.addTask);
router.put('/', taskController.editTask);
router.delete('/', taskController.deleteTask);

module.exports = router;