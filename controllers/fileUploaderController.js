const SingleFile = require('../models/singleFile');
var cloudinary = require('./../helpers/cloudinary');
const singleFileUpload = async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path);

		const file = new SingleFile({
			fileName: result.original_filename,
			filePath: result.secure_url,
			fileUrl: req.body.title,
			filter: req.body.filter,
		});

		const response = await file.save();

		res.status(201).send('File Uploaded Successfully');
	} catch (error) {
		res.status(400).json(error.message);
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
