import React, { Component } from 'react';

class Fixtures extends Component {
  render() {
    const { fixtures } = this.props
    const styles = {
      flex: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      match: {
        padding: '1em',
        borderBottom: 'solid #360037 1px',
        width: '15em',
        textAlign: 'left',
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
          fixtures.map((game, key) =>
            <div key={'game_' + key}>
                <div style={styles.match}>
                 <span style={styles.team}>{game.awayTeamName}</span><span style={styles.result}> {game.result.goalsAwayTeam}</span> 
                  <br /> 
                <span style={styles.team}>{game.homeTeamName}</span><span style={styles.result}> {game.result.goalsHomeTeam}</span>
                </div>
            </div>
          )
        }
      </div>
    )
  }
}
export default Fixtures;