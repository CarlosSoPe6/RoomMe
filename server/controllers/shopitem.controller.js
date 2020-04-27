'use strict'

const si = require('../model/ShoppingItem');

class ShoppingItemControl {
    async add(req, res) {
        let newItem = {
            product: req.body.product,
            creator: req.user.uid,
            qty: req.body.qty,
            completed: false,
            price: 0,
            buyer: null,
            list: req.body.list
        }
        try{
            await si.addItem(newItem);
            res.sendStatus(200);
        }
        catch(err){
            console.log(err)
            res.status(400).send({
                error:"Error al añadir item"
            });
        }
    }

    async getListItems(req, res) {
        let items = await si.getAllItemsByList(req.params.id);
        res.json(items);
    }

    async getBuyerItems(req, res) {
        let items = await si.getAllItemsByBuyer(req.params.id);
        res.json(items);
    }

    async editItem(req, res) {
        let newItem = {
            siid: req.body.siid,
            product: req.body.product,
            creator: req.body.creator, 
            qty: req.body.qty,
            completed: req.body.completed,
            price: req.body.price,
            buyer: req.body.buyer,
            list: req.body.list
        }
        try{
            await si.updateItem(newItem);
            res.sendStatus(200);
        }
        catch(err){
            console.log(err)
            res.status(400).send({
                error:"Error al añadir lista"
            });
        }
    }

    async deleteItem(req, res) {
        let result = await si.deleteItem(req.body.siid);
        res.json(result);
    }
}

const ShoppingItemController = new ShoppingItemControl();
module.exports = ShoppingItemController;