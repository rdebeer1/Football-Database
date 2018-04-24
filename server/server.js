const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.header()
});

app.listen(port, () => console.log(`Listening on port ${port}`));