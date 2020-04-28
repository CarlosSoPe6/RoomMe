const cloudinary = require('cloudinary');
const config = require('./config');

cloudinary.config({
    cloud_name: config.dbCloud,
    api_key: config.cloud_Key,
    api_secret: config.cloud_Secret
})