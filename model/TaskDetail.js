'use strict';

const DBClient = require('./DBClient');

/**
 * Task Detail model class.
 */
class TaskDetail extends DBClient {

    /**
     * Id database field.
     * @type number
     */
    Id;

    /**
     * TaskId database field. FK to task.
     * @type number
     */
    TaskId;

    /**
     * Description database field.
     * @type string
     */
    Description;

    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = TaskDetail;
