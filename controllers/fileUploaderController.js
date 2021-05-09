const SingleFile = require('../models/singleFile');

const singleFileUpload = async (req, res, next) => {
	try {
		const file = new SingleFile({
			fileName: req.file.originalname,
			filePath: req.file.path,
			fileUrl: req.body.title,
			filter: req.body.filter,
		});

		const response = await file.save();

		res.status(201).send('File Uploaded Successfully');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getallSingleFiles = async (req, res, next) => {
	try {
		const files = await SingleFile.find();

		res.status(200).send(files);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	singleFileUpload,
	getallSingleFiles,
};
