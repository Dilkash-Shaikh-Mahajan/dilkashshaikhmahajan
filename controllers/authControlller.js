const authmodel = require('../models/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {
	const userName = req.body.userName;
	const password = req.body.password;
	console.log(userName);
	console.log(password);
	const userGet = await authmodel.findOne({ userName: userName });

	if (userGet && (await bcrypt.compare(password, userGet.password))) {
		let id = userGet._id;
		const payload = {
			id,
		};
		const token = jwt.sign(payload, 'mynameisdilkashshaikhmahajan', {
			expiresIn: '1d',
		});
		res.cookie('jwttoken', token, {
			httpOnly: true,
			expires: new Date(new Date().getTime() + 5 * 60 * 1000),
		});

		res.status(201).json({ message: 'User Login SuccessFully', token });
	} else {
		res.json({ message: ' Invalid Credential ' });
	}
};

module.exports = {
	loginController,
};
