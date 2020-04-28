'use strict';

const PollModel = require('./../model/Poll');
const PollAnswerModel = require('./../model/PollAnswer');

class PollController {
    constructor() {

    }

    /**
     * Gets all the poll associated to a house.
     * @param {*} req 
     * @param {*} res 
     */
    async pollGetByHouse(req, res) {
        let houseId = req.user.house;
        let doc = await PollModel.getByHouse(houseId);

        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Gets a single poll by id. Checks hoouse association.
     * @param {*} req 
     * @param {*} res 
     */
    async pollGetSingle(req, res) {
        let uid = req.params.id;
        let doc = await PollModel.getSingle(uid);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Creates a poll associated to a house.
     * @param {*} req 
     * @param {*} res 
     */
    async pollCreate(req, res) {
        let userId = req.user.id;
        let houseId = req.user.house;
        if(req.body.title == undefined){
            res.status(400).json({'error': 'tittle'});
            return;
        }
        if(req.body.descrption == undefined){
            res.status(400).json({'error': 'descrption'});
            return;
        }
        if(req.body.questions == undefined){
            res.status(400).json({'error': 'questions'});
            return;
        }

        let { title,
            descrption,
            questions } = req.body;
        let createdAt = new Date();
        let doc = await PollModel.create(
            title,
            descrption,
            userId,
            houseId,
            createdAt,
            questions
        );

        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.status(201).json(doc);
    }

    /**
     * Answers a poll.
     * @param {*} req 
     * @param {*} res 
     */
    async pollAnswer(req, res) {
        let userId = req.user.id;
        let pollId = req.body.pollId;
        let answers = req.body.answers;
        PollAnswerModel.answer(pollId, userId, answers);
    }

    /**
     * Updates a poll.
     * @param {*} req 
     * @param {*} res 
     */
    async pollUpdate(req, res) {
        let userId = req.user.id;
        let pollid = req.params.id;
        if(req.body.title == undefined){
            res.status(400).json({'error': 'tittle'});
            return;
        }
        if(req.body.descrption == undefined){
            res.status(400).json({'error': 'descrption'});
            return;
        }
        if(req.body.houseId == undefined){
            res.status(400).json({'error': 'houseId'});
            return;
        }
        if(req.body.questions == undefined){
            res.status(400).json({'error': 'questions'});
            return;
        }

        let { title,
            descrption,
            houseId,
            questions } = req.body;
        let doc = await PollModel.update(pollid,
            {
                title,
                descrption,
                userId,
                houseId,
                createdAt,
                questions
            }
        );

        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.status(200).json(doc);
            
    }

    /**
     * Deletes a poll.
     * @param {*} req 
     * @param {*} res 
     */
    async pollDelete(req, res) {
        let id = req.params.id;
        let doc = await PollModel.delete(id);

        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.status(200).json(doc);
    }

    async pollGetAnswers(req, res) {
        let poll = req.params.pollId;
        let doc = PollAnswerModel.getAnswers(poll);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.status(200).json(doc);
    }
}

module.exports = new PollController();
