'use strict';

const DBClient = require('./DBClient');

/**
 * Notification model class.
 */
class Notification extends DBClient {

    /**
     * Id database field.
     * @type number
     */
    Id;

    /**
     * TargetId database field. FK to User.
     * @type number
     */
    TargetId;

    /**
     * TaskId database field. FK to Task.
     * @type number
     */
    TaskId;

    /**
     * PollId database field. FK to Poll.
     * @type number
     */
    PollId;

    /**
     * TypeID database field. FK to Type.
     * @type number
     */
    TypeId;

    /**
     * Calendar database field. Link to calendar.
     * @type string
     */
    Calendar;

    /**
     * Creation database field.
     * @type date
     */
    Creation;

    /**
     * Seen database field.
     * @type boolean
     */
    Seen;
    
    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = Notification;
