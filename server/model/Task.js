'use strict';

const DBClient = require('./DBClient');
const mongoose = require('./../../config/mongo.conf');
const AutoIncrement = require('mongoose-sequence')(mongoose);

/**
 * Task model class.
 */
class Task extends DBClient {
    /**
     * Class constructor.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            tid: {
                type: Number,
                unique: true
            },
            authorId: {
                type: Number,
                required: true
            },
            houseId: {
                type: Number, 
                required: true
            },
            description: {
                type: String, 
                required: true
            }, 
            creationDate: {
                type: Date,
                required: true
            }, 
            complete: {
                type: Boolean,
                required: true
            }
        });
        this._schema.plugin(AutoIncrement, {inc_field : 'tid'});
        this._model = mongoose.model('taskList', this._schema)
    }

    /**
     * Create task
     * @param {Object} newTask
     */
    async addTask(newTask) {
        let task = new this._model(newTask);
        return await this.add(task);
    }

    async updateTask(newTask) {
        return await this.update({tid : newTask.tid}, newTask);
    }

    async getAllHouseTasks(houseId) {
        return await this.query({houseId}, "", {});
    }

    async getAllUserTasks(authorId) {
        return await this.query({authorId}, "", {});
    }

    async getTask(tid) {
        return await this.queryOne({tid}, "", {});
    }

    async deleteTask(tid) {
        return await this.delete({tid});
    }
}

module.exports = new Task();
