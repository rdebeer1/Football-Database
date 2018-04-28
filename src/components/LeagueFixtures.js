import React, { Component } from 'react';

class LeagueFixtures extends Component {
  render() {
    const { leagueFixtures } = this.props
    const styles = {
      flex: {
        fontFamily: 'Premier League',
        display: 'flex',
        flexDirection: 'column',
        flex: .2,
        height: '100vh'
      },
      match: {
        border: 'solid #360037 .2em',
        padding: '.5em',
        background: '#fff',
        color: '#360037',
        display: 'flex',
        flexDirection: 'row',
        flexShrink: 1,
        justifyContent: 'center'
      },
      team: {
        fontSize: '1vw',
        flex: 1,
      },
      result: {
        fontSize: '1vw',
        flex: 1,
      }
    }
    return (
      <div style={styles.flex}>
        {
          leagueFixtures.map((game, key) =>
            <div key={'game_' + key} style={styles.match}>
              <div style={styles.team}>@{game.awayTeamName}<div style={{ borderTop: '1px solid #360037', paddingTop: '2px' }}>{game.homeTeamName}</div></div>
                <div style={styles.result}>{game.result.goalsAwayTeam}<div>{game.result.goalsHomeTeam}</div></div>
              </div>
          )
        }
      </div>
    )
  }
}
export default LeagueFixtures;