const route = require("express").Router();
const ShopListController = require("../controllers/shopping.controller");
const ShopItemController = require("../controllers/shopitem.controller");

route.get('/', ShopListController.getLists);
route.post('/', ShopListController.add);
route.put('/', ShopListController.editList);
route.delete('/', ShopListController.deleteList);

route.get('/item/list/:id', ShopItemController.getListItems);
route.get('/item/buyer/:id', ShopItemController.getBuyerItems);
route.post('/item', ShopItemController.add);
route.put('/item', ShopItemController.editItem);
route.delete('/item', ShopItemController.deleteItem);



module.exports = route;