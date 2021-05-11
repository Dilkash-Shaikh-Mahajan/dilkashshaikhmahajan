const nodemailer = require('nodemailer');
const mailSendController = (req, res) => {
	try {
		let data = req.body;
		//1 Thing
		let smtpTransport = nodemailer.createTransport({
			service: 'Gmail',
			// the connect port
			port: 465,

			// authenticate
			auth: {
				user: process.env.gmail_username,
				pass: process.env.gmail_password,
			},
		});
		//2 define the mailoptions
		let mailOptions = {
			to: 'dilkashmahajan8@gmail.com',
			from: data.email,
			subject: `Message from ${data.name}`,
			html: `
    
			    <h3>Informations</h3>
			    <ul>
			    <li>Name: ${data.name}</li>
			    <li>Email: ${data.email}</li>

			    </ul>
			    <h3>Message</h3>
			    <p>${data.comment}</p>


			    `,
		};

		// 3.send the message with sendmail
		smtpTransport.sendMail(mailOptions, (err) => {
			try {
				if (err)
					return res
						.status(400)
						.json({ msg: 'Please fill all the fields' });

				res.status(200).json({ msg: 'Message was sent succesfullly' });
			} catch (err) {
				if (err)
					return res
						.status(500)
						.json({ msg: 'There is server error' });
			}
		});
	} catch (error) {
		throw error;
	}
};
module.exports = { mailSendController };
