import React, { Component } from 'react';

class TeamRosters extends Component {
  render() {
    const { teamRosters } = this.props
    const styles = {
      container: {
        flex: 1,
        overflow: 'scroll',
        fontSize: '1vw',
        fontFamily: 'Premier League',
        display: 'flex',
      },
      th: {
        borderBottom: 'dashed .1vw black',
      }
    }
    const players = teamRosters.map((p, i) => {
      return (
        <tr key={p.dateOfBirth + i}>
          <td>{p.jerseyNumber || '27'}</td>
          <td>{p.name}</td>
          <td>{p.position}</td>
          <td>{p.nationality}</td>
        </tr>
      );
    })

    return (
      <div style={styles.container} >
        <table style={{borderSpacing: '1em'}}>
          <caption>Team Roster</caption><br />
          <tbody>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Position</th>
              <th style={styles.th}>Nationality</th>
            </tr>
            {players}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TeamRosters;