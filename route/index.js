const express = require('express');
const route = express.Router();
const { upload } = require('../helpers/fileHelpers');
const {
	singleFileUpload,
	getallSingleFiles,
} = require('../controllers/fileUploaderController');
const { mailSendController } = require('../controllers/mailSendController');
const { loginController } = require('../controllers/authControlller');

route.post('/singleFile', upload.single('file'), singleFileUpload);
route.get('/getSingleFiles', getallSingleFiles);
route.post('/contact', mailSendController);

route.post('/login', loginController);
module.exports = route;
