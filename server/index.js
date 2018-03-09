import helpers from '../src/Helper';
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const moment = require('moment');
const timezone = require('moment-timezone');


dotenv.config();
const app = express();
app.use(express.static(__dirname + '/../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(process.env.MONGO_DATABASE);

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});