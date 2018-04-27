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
      logo: {
        height: "4em",
        position: 'relative',
        top: '.5em',
        bottom: '.5em',
        margin: '0 .1em'
      },
      matchday: {
        fontSize: '1em',
        margin: 0,
        paddingTop: '1em',
        paddingBottom: '.5em'
      },
      crest: {
        height: '1.5em',
        width: '1.5em',
        padding: '.25em',
      },
    }

    return (
      <div>
        <div>{leagueCaption}</div>
        <LeagueLogo style={styles.logo} />
        <div style={styles.matchday}> Matchday: {leagueMatchday}</div>
                {
        leagueData.map((crest, key) =>
          <span onClick={() => handleOnTeamClick(crest._links.team.href)} key={'crest_' + key}>
            <img style={styles.crest} src={crest.crestURI} alt='' onClick={handleOpen} />
          </span>
        )
      }
      </div>
    )
  }
}
export default Main;