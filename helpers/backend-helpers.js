const dotenv = require('dotenv');
const db = require('../database/index.js');
const moment = require('moment');
dotenv.config();

function getFootballData() {
  fetch('http://api.football-data.org/v1/fixtures?timeFrame=n1', {
    method: 'GET',
    headers: {
      'X-Auth-Token': `${process.env.MY_API_TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        res: {
          fixtures: data.fixtures[0].homeTeamName
        }
      })
    })
}

exports.getFootballData = getFootballData;