import React, { Component } from 'react';

class LeagueFixtures extends Component {
  render() {
    const { leagueFixtures } = this.props
    const styles = {
      flex: {
        fontFamily: 'Premier League',
        overflow: 'scroll',
        flexDirection: 'column',
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
      },
      table: {
        fontFamily: 'Premier League',
        fontSize: '1vw',
        borderCollapse: 'collapse',
        width: '100%',
        marginTop: '1.5em',
      },
      match: {
        color: '#fff',
      },
    }
    const fixtures = leagueFixtures.map((game, key) => {
      return (
        <tbody key={'game_' + key}>
          <tr style={styles.match}>
            <td style={{ borderTop: 'solid 1px white' }}>@{game.awayTeamName}</td>
            <td style={{ borderTop: 'solid 1px white' }}>{game.result.goalsAwayTeam}</td>
          </tr>
          <tr style={styles.match}>
            <td style={{ borderBottom: 'solid 1px white' }}>{game.homeTeamName}</td>
            <td style={{ borderBottom: 'solid 1px white' }}>{game.result.goalsHomeTeam}</td>
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