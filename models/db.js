const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		//database Name
		const databaseName = 'EmployeeDatabase';
		const con = await mongoose.connect(
			process.env.mongoDb_URL,
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
