import React, { Component } from 'react';

class LeagueFixtures extends Component {
  render() {
    const { leagueFixtures } = this.props
    const styles = {
      flex: {
        flexDirection: 'column',
        padding: '1em',
        display: 'flex',
      },
      match: {
        paddingBottom: '1.5em',
        paddingTop: '.5em',
        paddingRight: '1em',
        paddingLeft: '1em',
        border: 'solid #360037 .2em',
        width: '15em',
        background: '#fff',
        color: '#360037',
        height: '1em',
        flex: 1,
      },
      team: {
        float: 'left',
      },
      result: {
        float: 'right',
      }
    }
    return (
      <div style={styles.flex}>
        {
          leagueFixtures.map((game, key) =>
            <div key={'game_' + key}>
              <div style={styles.match}>
                <span style={styles.team}>{game.awayTeamName}</span><span style={styles.result}> {game.result.goalsAwayTeam}</span>
                <br />
                <span style={styles.team}>@{game.homeTeamName}</span><span style={styles.result}> {game.result.goalsHomeTeam}</span>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
export default LeagueFixtures;