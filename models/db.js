const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		//database Name
		const databaseName = 'EmployeeDatabase';
		const con = await mongoose.connect(
			`mongodb+srv://dilkash786:dilkash786@schoolmanagement.pcb6g.mongodb.net/portfolio?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			},
		);
		console.log(`Database connected : ${con.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

module.exports = connectDB;
