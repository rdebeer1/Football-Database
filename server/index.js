const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const helpers = require('../helpers/backend-helpers');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoose = require('mongoose');
const moment = require('moment');
const timezone = require('moment-timezone');
const app = express();
app.use(express.static(__dirname + '/../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(process.env.MONGO_DATABASE);

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});