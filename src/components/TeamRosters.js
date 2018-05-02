import React, { Component } from 'react';

class TeamRosters extends Component {
  render() {
    const { teamRosters } = this.props

    const players = teamRosters.map((p, i) => {
      return (
        <tr key={p.dateOfBirth + i}>
          <td style={{ flex: '100 0 auto', overflow: 'hidden' }}>{p.jerseyNumber || '27'}</td>
          <td style={{ flex: '100 0 auto', overflow: 'hidden' }}>{p.name}</td>
          <td style={{ flex: '100 0 auto', overflow: 'hidden' }}>{p.position}</td>
          <td style={{ flex: '100 0 auto', overflow: 'hidden' }}>{p.nationality}</td>
        </tr>
      );
    })
    return (
      <div style={{ display: 'flex', flexDirection: 'column', color: '#242424'}}>
        <table style={{ flex: '100 0 auto', flexDirection: 'column', textAlign: 'center'}}>
          <caption style={{ flex: '100 0 auto', margin: '5px', fontWeight: 'bold'}}>Squad</caption>
          <tbody>
            <tr>
              <th style={{ textAlign: 'center' }}>#</th>
              <th style={{ textAlign: 'center' }}>Name</th>
              <th style={{ textAlign: 'center' }}>Position</th>
              <th style={{ textAlign: 'center' }}>Nationality</th>
            </tr>
            {players}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TeamRosters;