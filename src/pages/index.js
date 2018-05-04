import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import TableStandings from '../components/TableStandings';
import Matchday from '../components/Matchday'
import TeamRosters from '../components/TeamRosters';
import Schedule from '../components/Schedule'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Header from '../components/Header'
const config = require('../config');
const key = config.MY_API_TOKEN
const pl = require("../assets/images/pl.jpg")

class HomeIndex extends Component {
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
        let str = team_base_url
        let url = str.replace('http://', "https://", team_base_url);
        this.setState({
            teamId: url,
        });
        this.getTeamFixtures(url);
        this.getTeamRosters(url);
    }


    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const { leagueData } = this.state
        const { teamFixtures } = this.state
        const { teamRosters } = this.state
        const { leagueCaption } = this.state
        const { leagueMatchday } = this.state
        const { teamId } = this.state
        const { leagueFixtures } = this.state
        const styles={
            overlay: {
                
            }
        }
        const actions = [

        ];
        return (
            <MuiThemeProvider>
            <div>
                    <Helmet>
                            <title>{siteTitle}</title>
                            <meta name="description" content={siteDescription} />
                    </Helmet>
                    <div id="main">
                        <section id="one">
                            <div style={{ fontSize: '3em', textAlign: 'center', color: '#fff', margin: '1em', margin: 0 }}>Table</div>
                        <Matchday matchday={leagueMatchday} />
                        </section>
                        <section id="two">
                            <TableStandings
                                leagueData={leagueData}
                                teamId={teamId}
                                handleOnTeamClick={this.handleOnTeamClick}
                                handleOpen={this.handleOpen}
                                teamFixtures={teamFixtures} 
                                matchday={leagueMatchday}
                            >
                            </TableStandings>
                            <Dialog
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}              
                                autoScrollBodyContent={true}
                                bodyStyle={{ backgroundColor: '#fff', borderColor: '#fff'}}
                            >
                                <TeamRosters teamRosters={teamRosters} />
                            </Dialog>
                        </section>
                        <section id="three">
                        </section>
                    </div>
                    <div id="main" style={{ backgroundImage:'url('+pl+')'}}>
                        <section id="one">
                            <div style={{ fontSize: '3em', textAlign: 'center', color: '#fff', margin: '1em', margin: 0}}>Fixtures</div>
                            <Matchday matchday={leagueMatchday} />
                        </section>
                        <section id="two" >
                            <Schedule leagueFixtures={leagueFixtures} />
                        </section>
                        <section id="three">
                        </section>


                    </div>
            </div>
         </MuiThemeProvider>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`