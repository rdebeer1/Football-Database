import React, { Component } from 'react';
import LeagueTableRow from './LeagueTableRow';
import Header from './Header';
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
          this.setState({
          leagueTable: {
            leagueCaption: data.leagueCaption,
            matchday: data.matchday,
          },
          standing: data.standing
        })
        console.log(this.state.standing)
      })
  }
  render() {
    const { leagueTable } = this.state
    const { standing } = this.state
    const styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '',
        backgroundSize: '',
        fontFamily: 'Premier League',
        fontWeight: 300,
        padding: '5em 0',
        minHeight: 'calc(100vh - 10em)'
      },
      tableWrap: {
        textAlign: 'center',
        backgroundColor: '#360037',
        color: '#fff',
        borderRadius: '3px'
      },
      league: {
        fontSize: '2em',
        margin: 0,
      },
      matchday: {
        fontSize: '1em',
        margin: 2,
      }
    }
    return (
      <div className="App">
        <div style={styles.container}>
          <div style={styles.tableWrap}>
            <div style={styles.league}>{leagueTable.leagueCaption}</div>
            <div style={styles.matchday}> Matchday: {leagueTable.matchday}</div>
            <Header />
              <LeagueTableRow standing={standing}/>
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;
