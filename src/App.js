import React, { Component } from 'react';
import LeagueTableRow from './components/LeagueTableRow';
import LeagueLogo from './components/LeagueLogo'
import LeagueFixtures from './components/LeagueFixtures'
import TeamFixtures from './components/TeamFixtures'
import TeamRosters from './components/TeamRosters'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
require('dotenv').config();

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
    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", process.env.REACT_APP_MY_API_TOKEN);
    var myInit = {
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
      dataType: 'json',
    };

    fetch(base_url, myInit)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        leagueData: data.standing,
        leagueCaption: data.leagueCaption,
        leagueMatchday: data.matchday,
      });
    })
  }
  getTeamFixtures = (team_base_url) => {
    let url = team_base_url + '/fixtures';

    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", process.env.REACT_APP_MY_API_TOKEN);

    var myInit = {
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
      dataType: 'json',
    };

    fetch(url, myInit)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        teamFixtures: data.fixtures
      });
    });
  }
  getTeamRosters = (team_base_url) => {
    let url = team_base_url + '/players';

    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", process.env.REACT_APP_MY_API_TOKEN);

    var myInit = {
      method: 'GET',
      headers: myHeaders,
      cache: 'default',
      dataType: 'json',
    };

    fetch(url, myInit)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        teamRosters: data.players
      });
    })
  }
  getLeagueFixtures = () => {
    let base_url = this.urls.en + '/fixtures'; 
    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", process.env.REACT_APP_MY_API_TOKEN);
    var myInit = {
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
    console.log("handleOnTeamClick" , team_base_url);
    this.setState({
      teamId: team_base_url,
    });
    this.getTeamFixtures(team_base_url);
    this.getTeamRosters(team_base_url);
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
        padding: '1em',
      },
      matchday: {
        fontSize: '1em',
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
      crest: {
        height: '1.5em',
        width: '1.5em',
        padding: '.25em',
      },
      dialogStyle: {
        display: 'flex',
        textAlign: 'left',
        fontSize: '10px',
        marginLeft: '1em',
      }
    }
    const actions = [
      
    ];
    return (
        <div className="App">
        <MuiThemeProvider>
          <div style={styles.container}>
            <div style={styles.league}>
            <div> {leagueCaption} </div>
              <LeagueLogo style={styles.logo} />
              <div style={styles.matchday}> Matchday: {leagueMatchday}</div>
              {
              leagueData.map((crest, key) =>
                  <span onClick={() => this.handleOnTeamClick(crest._links.team.href)} key={'crest_' + key}> 
                    <img style={styles.crest} src={crest.crestURI} alt='' onClick={this.handleOpen}/>
              </span>
              )
            }
              <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                style={{alignText: 'center'}}>
                <div style={styles.dialogStyle}>
                  <TeamFixtures teamFixtures={teamFixtures} matchday={leagueMatchday} team_base_url={teamId} />
                  <TeamRosters teamRosters={teamRosters} /> 
                </div>
              </Dialog>
            </div>
            <div style={styles.tableWrap}>
              <LeagueTableRow leagueData={leagueData} teamId={teamId}/>
            </div>
            <div style={styles.fixtureWrap}>
              <LeagueFixtures leagueFixtures={leagueFixtures} />
            </div>
          </div>
      </MuiThemeProvider>
      </div>
    ); 
  }
}

export default App;
