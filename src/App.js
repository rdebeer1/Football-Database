import React, { Component } from 'react';
import Title from './components/Title'
import Logo from './components/Logo'
import TeamFixtures from './components/TeamFixtures'
import TeamRosters from './components/TeamRosters'
import TableStandings from './components/TableStandings';
import Matchday from './components/Matchday'
import Schedule from './components/Schedule'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
const dotenv = require('dotenv');
dotenv.config();

const key = process.env.REACT_APP_MY_API_TOKEN

class App extends Component {
    state = {
      leagueSelect: 'en',
      leagueData: [],
      leagueCaption: null,
      leagueMatchday: [],
      teamRosters: [],
      teamFixtures: [],
      leagueFixtures: [],
      teamId: null,
      open: false,
    }
    urls = {
      en: 'https://api.football-data.org/v1/competitions/445',
    }

  componentDidMount() {
    this.getLeagueFixtures();
    if (this.state.leagueData.length === 0) {
      this.getLeagueData(this.state.leagueSelect);
    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getLeagueData = () => {
    let base_url = this.urls.en + '/leagueTable'; 
    var myHeaders = new Headers({
      "X-Auth-Token": key,
    });
    var myInit = {
      credentials: 'same-origin',
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
      dataType: 'json',
    };

    fetch(base_url, myInit)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.standing)
      this.setState({
        leagueData: data.standing,
        leagueCaption: data.leagueCaption,
        leagueMatchday: data.matchday,
      });
    })
  }
  getTeamFixtures = (url) => {
    let https = url + '/fixtures';

    var myHeaders = new Headers({
      "X-Auth-Token": key,
    });
    var myInit = {
      credentials: 'same-origin',
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
      dataType: 'json',
    };

    fetch(https, myInit)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        teamFixtures: data.fixtures
      });
    });
  }
  getTeamRosters = (url) => {
    let https = url + '/players';
    var myHeaders = new Headers({
      "X-Auth-Token": key,
    });
    var myInit = {
      credentials: 'same-origin',
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
      dataType: 'json',
    };

    fetch(https, myInit)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        teamRosters: data.players
      });
    })
  }
  getLeagueFixtures = () => {
    let base_url = this.urls.en + '/fixtures'; 
    var myHeaders = new Headers({
      "X-Auth-Token": key,
    });
    var myInit = {
      credentials: 'same-origin',
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
      dataType: 'json',
    };

    fetch(base_url, myInit)
    .then((res) => res.json())
    .then((data) => {
      let currentMatchday = []
      let awayTeamName = []
      let homeTeamName = []
      let awayTeamGoals = []
      let homeTeamGoals = []
      data.fixtures.map((index) => {
        if (index.matchday === this.state.leagueMatchday) {
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
        leagueFixtures: currentMatchday,
      })
    })
  }

  handleOnTeamClick = (team_base_url) => {
    let  str = team_base_url
    let url = str.replace('http://', "https://", team_base_url);
    console.log(url)
    this.setState({
      teamId: url,
    });
    this.getTeamFixtures(url);
    this.getTeamRosters(url);
  }

  render() {
    const { leagueData } = this.state
    const { teamFixtures } = this.state
    const { teamRosters } = this.state
    const { leagueCaption } = this.state
    const { leagueMatchday } = this.state
    const { teamId } = this.state
    const { leagueFixtures } = this.state

    const styles = {
      container: {
        flex: 1,
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
      main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: '1vw',
        overflow: 'hidden',
      },
      main2: {
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        padding: '1vw',
        overflow: 'hidden',
      },
      league: {
        fontSize: '1.5em',
        textAlign: 'center,',
        backgroundColor: '#360037',
        color: '#fff',
        width: '100%',
        flex: 1,
        padding: '1em',
      },
      dialogStyle: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: '10px',
        overflow: 'hidden'
      },
      test: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#360037',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'Premier League',
        fontWeight: 300,
        height: '100vh',
        position: 'static',
        margin: 0,
        padding: 0,
      },
      logo: {
        display: 'flex',
        flex: 1,
        fontFamily: 'Premier League',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5vw',
      },
    }
    const actions = [
      
    ];
    return (
      <div className='App' style={styles.test}>
        <MuiThemeProvider>
            <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
              <div style={styles.main}>
                <Title leagueCaption={leagueCaption} />
                <Logo style={styles.logo} />
                <Matchday leagueMatchday={leagueMatchday}/>
              </div>
              <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={false}
                contentStyle={{ display: 'flex'}}
                bodyStyle={{ display: 'flex', padding:'.5em'}}
                >
                <div style={styles.dialogStyle}>
                  <TeamFixtures teamFixtures={teamFixtures} matchday={leagueMatchday} />
                  <TeamRosters teamRosters={teamRosters} /> 
                </div>
              </Dialog>
            <div style={styles.main2}>
              <Schedule leagueFixtures={leagueFixtures} />
              <TableStandings 
                leagueData={leagueData} 
                teamId={teamId} 
                handleOnTeamClick={this.handleOnTeamClick}
                handleOpen={this.handleOpen} 
                />
            </div>
          </div>
      </MuiThemeProvider>
      </div>
    ); 
  }
}

export default App;
