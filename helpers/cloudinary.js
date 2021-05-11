const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: 'dilkashshaikhmahajan',
	api_key: 381781286987188,
	api_secret: 'EHLzXQVMXXjRRN5GKLHgKJqIE7A',
});

module.exports = cloudinary;
