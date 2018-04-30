import React, { Component } from 'react';

class TeamFixtures extends Component {
  render() {
    const { teamFixtures } = this.props
    const { matchday } = this.props
    const styles = {
      container: {
        flex: .8,
        overflow: 'scroll',
        fontSize: '1vw',
        display: 'flex',
        color: '#360037',
        fontFamily: 'Premier League',
      },
      th: {
        borderBottom: 'dashed .1vw #360037',
      }
    }
    const next_fixtures = teamFixtures.map((fix, i) => {
      if ((fix.matchday > matchday - 1) && fix.matchday < matchday + 15) {
        let d = new Date(fix.date);
        let datestring = (d.getMonth() + 1) + "/" + d.getDate();
        return (
          <tr key={fix.date + i}>
            <td>{datestring}</td>
            <td>{fix.homeTeamName}</td>
            <td>{fix.awayTeamName}</td>
          </tr>
        );
      }
      return next_fixtures;
    });
    return (
      <div style={styles.container}>
        <table style={{ borderSpacing: '1em' }}>
          <caption style={{margin: '1vw'}}>Upcoming Fixtures</caption>
          <tbody>
            <tr>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Home</th>
              <th style={styles.th}>Away</th>
              </tr>
            {next_fixtures}
          </tbody>
        </table>
      </div>
    )
  }
}
export default TeamFixtures;