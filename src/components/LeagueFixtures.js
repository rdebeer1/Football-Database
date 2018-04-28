import React, { Component } from 'react';

class LeagueFixtures extends Component {
  render() {
    const { leagueFixtures } = this.props
    const styles = {
      flex: {
        fontFamily: 'Premier League',
        overflow: 'scroll',
        display: 'flex',
        
      },
      table: {
        fontFamily: 'Premier League',
        fontSize: '1vw',
        borderCollapse: 'collapse',
        marginTop: '1.5em'

      },
      match: {
        color: '#fff',
      },
    }
    const fixtures = leagueFixtures.map((game, key) => {
      return (
        <tbody key={'game_' + key}>
          <tr style={styles.match}>
            <td>@{game.awayTeamName}</td>
            <td>{game.result.goalsAwayTeam}0</td>
          </tr>
          <tr style={styles.match}>
            <td style={{ borderBottom: 'solid 1px white' }}>{game.homeTeamName}</td>
            <td style={{ borderBottom: 'solid 1px white' }}>{game.result.goalsHomeTeam}0</td>
          </tr>
        </tbody>
      );
    })

    return (
      <div style={styles.flex}>
        <table style={styles.table}>
          {fixtures}
       </table>
      </div>
    )
  }
}
export default LeagueFixtures;