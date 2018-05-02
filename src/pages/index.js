import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Title from '../components/Title'
import TeamFixtures from '../components/TeamFixtures'
import TeamRosters from '../components/TeamRosters'
import TableStandings from '../components/TableStandings';
import Schedule from '../components/Schedule'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Header from '../components/Header'
const config = require('../config');
const key = config.MY_API_TOKEN

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
                console.log(this.state.teamFixtures)
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
        console.log(url)
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
            <div>
                    <Helmet>
                            <title>{siteTitle}</title>
                            <meta name="description" content={siteDescription} />
                    </Helmet>
                <MuiThemeProvider>
                    <div id="main">
                        <section id="one">
                            <TableStandings
                                leagueData={leagueData}
                                teamId={teamId}
                                handleOnTeamClick={this.handleOnTeamClick}
                                handleOpen={this.handleOpen}
                            />
                            <Dialog
                                bodyStyle={{padding: 0}}
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                autoScrollBodyContent={true}
                            >
                            <TeamFixtures teamFixtures={teamFixtures} matchday={leagueMatchday} />
                            <TeamRosters teamRosters={teamRosters} />
                            </Dialog>
                        </section>

                        <section id="two">
                            <Schedule leagueFixtures={leagueFixtures} />
                        </section>

                        <section id="three">
                        </section>

                    </div>
                    </MuiThemeProvider>
            </div>
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