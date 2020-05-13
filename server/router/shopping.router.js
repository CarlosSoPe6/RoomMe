const route = require("express").Router();
const ShopListController = require("../controllers/shopping.controller");
const ShopItemController = require("../controllers/shopitem.controller");
const requireAuth = require('./../middlewares/requireAuth');

route.get('/', requireAuth, ShopListController.getLists);
route.post('/', requireAuth, ShopListController.add);
route.put('/', requireAuth, ShopListController.editList);
route.delete('/', requireAuth, ShopListController.deleteList);

route.get('/item/list/:id', requireAuth, ShopItemController.getListItems);
route.get('/item/buyer/:id', requireAuth, ShopItemController.getBuyerItems);
route.post('/item', requireAuth, ShopItemController.add);
route.put('/item', requireAuth, ShopItemController.editItem);
route.delete('/item', requireAuth, ShopItemController.deleteItem);

module.exports = route;