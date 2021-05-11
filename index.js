const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const routes = require('./route');
const cors = require('cors');
const path = require('path');
const connectDB = require('./models/db');
connectDB();
const PORT = process.env.PORT || 8080; //step 1
//step 2 database connectivity with atlas
app.use(bodyParser.json());
app.use(cors());
express.json();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', routes);
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
 app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}
app.get('/', (req, res) => {
	res.status(200).send(
		'please type http://localhost:3001/api for the view of api',
	);
});
app.listen(PORT, () => {
	console.log(`Server started on port`);
});
