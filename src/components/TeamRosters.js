import React, { Component } from 'react';

class TeamRosters extends Component {
  render() {
    const { teamRosters } = this.props
    const styles = {
      ul: {
        marginLeft: '2em'
      }
    }
    const player = teamRosters.map((p, i) => {
      return (
        <div key={p.dateOfBirth + i}>
          {p.jerseyNumber || '27'} {p.name} - {p.position} - {p.nationality}
        </div>
      );
    })

    return (
      <div style={styles.ul}>
        <div>
          <strong>Players</strong>
          {player}
        </div>
      </div>
    );
  }
}

export default TeamRosters;