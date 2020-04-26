'use strict'

const sl = require('../model/ShoppingList');

class ShoppingControl {
    async add(req, res) {

        let newList = {
            title: req.body.title,
            budget: req.body.budget,
            cost: req.body.cost,
            houseId: 1 //req.user.house

        }
        try{
            await sl.addList(newList);
            res.sendStatus(200);
        }
        catch(err){
            console.log(err)
            res.status(400).send({
                error:"Error al añadir lista"
            });
        }
    }

    async getLists(req, res) {
        // req.user.house
        let lists = await sl.getAllLists(1);
        res.json(lists);
    }

    async editList(req,res) {
        let newList = {
            slid: req.body.slid,
            title: req.body.title,
            budget: req.body.budget,
            cost: req.body.cost,
            houseId: 1 //req.user.house

        }
        try{
            await sl.updateList(newList);
            res.sendStatus(200);
        }
        catch(err){
            console.log(err)
            res.status(400).send({
                error:"Error al añadir lista"
            });
        }
    }

};

const ShoppingController = new ShoppingControl();
module.exports = ShoppingController;