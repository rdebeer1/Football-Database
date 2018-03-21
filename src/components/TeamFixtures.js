import React, { Component } from 'react';

class TeamFixtures extends Component {
  render() {
    const { teamFixtures } = this.props
    const { matchday } = this.props
    const styles = {
      table: {
        width: '25vh',
        margin: '.75em'
      },
      date: {
        width: '10vh',
        margin: '.75em'
      }
    }
    const next_fixtures = teamFixtures.map((fix, i) => {
      if ((fix.matchday > matchday - 1) && fix.matchday < matchday + 15) {
        let d = new Date(fix.date);
        let datestring = (d.getMonth() + 1) + "/" + d.getDate();
        return (
          <tr key={fix.date} className="fixture-item fixture-table-head">
            <td>{datestring}</td>
            <td>{fix.homeTeamName}</td>
            <td>{fix.awayTeamName}</td>
          </tr>
        );
      }
      return next_fixtures;
    });
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th style={styles.date}>Date</th>
              <th style={styles.table}>Home</th>
              <th style={styles.table}>Away</th>
            </tr>
            {next_fixtures}
          </tbody>
        </table>
      </div>
    )
  }
}
export default TeamFixtures;