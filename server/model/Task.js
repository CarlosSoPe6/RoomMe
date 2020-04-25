'use strict';

const DBClient = require('./DBClient');

/**
 * Task model class.
 */
class Task extends DBClient {

    /**
     * ID database field.
     * @type number
     */
    Id;

    /**
     * AuthorId database field. FK to User.
     * @type number
     */
    AuthorId;

    /**
     * HouseID database field. FK to House
     * @type number
     */
    HouseId;

    /**
     * Title database field.
     * @type string
     */
    Title;

    /**
     * Description database field.
     * @type string
     */
    Description;

    /**
     * Deadline database field.
     * @type Date
     */
    Deadline;

    /**
     * Constructor method.
     */
    constructor(){
        super();
    }
}

module.exports = Task;
