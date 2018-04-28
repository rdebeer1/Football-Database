import React, { Component } from 'react';
import LeagueLogo from './LeagueLogo'

class Main extends Component {

  render() {
    const { leagueCaption } = this.props
    const { leagueMatchday } = this.props
    const { leagueData } = this.props
    const { handleOnTeamClick } = this.props
    const { handleOpen } = this.props

    const styles = {
      container: {
        flex: 1,
        fontFamily: 'Premier League',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'scroll',
        height:'100vh'
      },
      logo: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
      },
      crest: {
        height: '2.5em',
        width: '2.5em',
        margin: '.5em',
        
      },
    }
    const crest = leagueData.map((crest, key) => {
      return (
        <span onClick={() => handleOnTeamClick(crest._links.team.href)} key={'crest_' + key}>
          <img style={styles.crest} src={crest.crestURI} alt='' onClick={handleOpen} />
        </span>
      )
    })
    return (
      <div style={styles.container}>
        <div style={{fontSize: '2vw', justifyContent: 'center', marginRight: '.5em', marginLeft: '.5em'}}>{leagueCaption}</div>
        <LeagueLogo style={styles.logo} />
        <div style={{ display: 'flex', fontSize: '2vw', justifyContent: 'center', margin: '.5em'}}> 
         Matchday: {leagueMatchday}</div>
        <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', }}>{crest}</div>
      </div>
    )
  }
}
export default Main;