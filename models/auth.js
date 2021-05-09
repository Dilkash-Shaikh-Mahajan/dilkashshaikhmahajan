const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
	userName: { type: String },
	password: { type: String },
});

const studentModel = mongoose.model('authentication', studentSchema);
module.exports = studentModel;
