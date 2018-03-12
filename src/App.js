import React, { Component } from 'react';
import LeagueTableRow from './LeagueTableRow';
import LeagueLogo from './LeagueLogo'
import Fixtures from './Fixtures'
import './App.css';
const config = require('./config.js');
// const db = require('../database/index.js');


class App extends Component {
    state = {
      leagueTable: [],
      standing: [],
      fixtures: [],
  }
  componentDidMount() {
    this.getLeagueTable();
    this.getLeagueFixtures();
  }


  getLeagueTable = () => {
    fetch('http://api.football-data.org/v1/soccerseasons/445/leagueTable', {
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
      })
    }

  getLeagueFixtures = () => {
    fetch('http://api.football-data.org/v1/competitions/445/fixtures', {
      headers: {
        'X-Auth-Token': `${config.MY_API_TOKEN}`,
        'X-Response-Control': 'full'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        let currentMatchday = []
        let awayTeamName = []
        let homeTeamName = []
        let awayTeamGoals = []
        let homeTeamGoals = []
        data.fixtures.map((index) => {
          if (index.matchday === this.state.leagueTable.matchday) {
            currentMatchday.push(index)
          }
          return index;
        })
        currentMatchday.map((result) => {
          awayTeamName.push(result.awayTeamName)
          homeTeamName.push(result.homeTeamName)
          if (result.result.goalsAwayTeam === null) {
            result.result.goalsAwayTeam = ''
            awayTeamGoals.push(result.result.goalsAwayTeam)
          } else { 
            awayTeamGoals.push(result.result.goalsAwayTeam)
          }
          if (result.result.goalsHomeTeam === null) {
            result.result.goalsHomeTeam = ''
            homeTeamGoals.push(result.result.goalsHomeTeam)
          } else {
            homeTeamGoals.push(result.result.goalsHomeTeam)
          }
          return result;
        })
        this.setState({
          fixtures: currentMatchday,
        })
        console.log(this.state.fixtures)
      })
  }
  render() {
    const { leagueTable } = this.state
    const { standing } = this.state
    const { fixtures } = this.state
    const styles = {
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        backgroundColor: '#360037',
        color: '#fff',
        height: '100vh',
        fontFamily: 'Premier League',
        fontWeight: 300,
        padding: '1em'
      },
      tableWrap: {
        textAlign: 'center',
        backgroundColor: '#360037',
        color: '#fff',
        flex: 1,
      },
      fixtureWrap: {
        alignItems: 'center',
        backgroundColor: '#360037',
        color: '#fff',
        flex: 1,
        paddingTop: '1em',
        paddingBottom: '.5em',
        margin: 0,
      },
      league: {
        fontSize: '1.5em',
        textAlign: 'center,',
        backgroundColor: '#360037',
        color: '#fff',
        width: '100%',
        flex: 1,
        padding: '1em'
        
      },
      matchday: {
        fontSize: '1.5em',
        margin: 0,
        paddingTop: '1em',
        paddingBottom: '.5em'
      },
      logo: {
        height: "4em",
        position: 'relative',
        top: '.5em',
        bottom: '.5em',
        margin: '0 .1em'
      },
    }
    return (
      <div className="App">
        <div style={styles.container}>
          <div style={styles.league}>
           <div> {leagueTable.leagueCaption} </div>
            <LeagueLogo style={styles.logo} />
            <div style={styles.matchday}> Matchday: {leagueTable.matchday}</div>
          </div>
          <div style={styles.tableWrap}>
            <LeagueTableRow standing={standing}/>
          </div>
          <div style={styles.fixtureWrap}>
            <Fixtures fixtures={fixtures}/>
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;
