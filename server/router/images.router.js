const route = require("express").Router();
const multer = require("multer");
const path = require("path");
const houseController = require("../controllers/house.controller");
const userController = require('./../controllers/user.controller');


const storage = multer.diskStorage({
    destination: path.join(__dirname, "../temp"),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime()+path.extname(file.originalname));
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/png') {
            cb(null, true);
        } else{
            cb(null, false);
        }
}

const uploadImage = multer({
    storage,
    limits: {fileSize: 1000000},
    fileFilter
})

route.post('/upload/house', uploadImage.single('image'), houseController.addPhoto);
route.post('/upload/user', uploadImage.single('image'), userController.updatePhoto);

module.exports = route;