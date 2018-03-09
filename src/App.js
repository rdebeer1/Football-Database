import React, { Component } from 'react';
import LeagueTableRow from './LeagueTableRow';
import './App.css';
// const db = require('../database/index.js');

const baseUrl = 'http://api.football-data.org/v1/';
const config = require('./config.js');

class App extends Component {
    state = {
      leagueTable: [],
      standing: [],
  }
  componentDidMount() {
    fetch(baseUrl + 'soccerseasons/445/leagueTable', {
      headers: {
        'X-Auth-Token': `${config.MY_API_TOKEN}`,
        'X-Response-Control': 'full'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
          this.setState({
          leagueTable: {
            leagueCaption: data.leagueCaption,
            matchday: data.matchday,
          },
          standing: data.standing
        })
      })
  }
  render() {
    const { leagueTable } = this.state
    const { standing } = this.state
    return (
      <div className="App">
        <h1>{leagueTable.leagueCaption}</h1>
          <h2>{leagueTable.matchday}</h2>
            <LeagueTableRow standing={standing}/>
          </div>
    ); 
  }
}

export default App;
