var express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
var app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});
