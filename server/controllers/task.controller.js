const Task = require("../model/Task");

class TaskController {
    async addTask(req, res) {
        let newTask = {
            authorId : req.body.author,
            houseId : req.body.house,
            description : req.body.description,
            creationDate : Date.now(),
            complete : false
        }

        try {
            await Task.addTask(newTask);
            res.sendStatus(200);
        } catch(err) {
            console.log(err);
            res.status(400).send({
                error : "Error al añadir tarea."
            });
        }
    }

    async editTask(req, res) {
        let newTask = {
            tid : req.body.taskId,
            authorId : req.body.author,
            houseId : req.body.house,
            description : req.body.description,
            creationDate : req.body.date,
            complete : req.body.complete
        }

        try {
            await Task.updateTask(newTask);
            res.sendStatus(200);
        } catch(err) {
            console.log(err);
            res.status(400).send({
                error : "Error al actualizar tarea."
            });
        }
    }

    async getAllHouseTasks(req, res) {
        let houseId = req.params.houseId;
        let tasks = await Task.getAllHouseTasks(houseId);
        res.json(tasks);
    }

    async getAllUserTasks(req, res) {
        let userId = req.params.userId;
        let tasks = await Task.getAllUserTasks(userId);
        res.json(tasks);
    }
    
    async getTask(req, res) {
        let taskId = req.params.id;
        let task = await Task.getTask(taskId);
        console.log(task);
        res.json(task);
    }

    async deleteTask(req, res) {
        let taskId = req.body.id;
        
        try {
            await Task.deleteTask(taskId);
            res.sendStatus(200);
        } catch(err) {
            console.log(err);
            res.status(400).send({
                error : "Error al eliminar tarea."
            });
        }
    }
};

module.exports = new TaskController();