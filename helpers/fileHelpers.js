const multer = require('multer');

const storage = multer.diskStorage({});
const filefilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/jpeg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload };
