const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./db.js');
const registrationRoutes = require('./route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
	() => { console.log('Database is connected') },
	err => { console.log('Can not connect to the database' + err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("./schema/User", registrationRoutes);


module.exports = app
