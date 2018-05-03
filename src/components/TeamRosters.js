import React, { Component } from 'react';

class TeamRosters extends Component {
  render() {
    const { teamRosters } = this.props
    
    const players = teamRosters.map((p, i) => {
      return (
        <tr style={{ borderBottom: '2px solid #fff', borderTop: 'none', borderColor: '#fff'}} key={p.dateOfBirth + i}>
          <td style={{ textAlign: 'center', color: '#ff015b', fontWeight: 'bold', }}>{p.jerseyNumber || '-'}</td>
          <td style={{ textAlign: 'center', color: '#ff015b', }}>{p.name}</td>
          <td style={{ textAlign: 'center', color: '#ff015b' }}>{p.position}</td>
          <td style={{ textAlign: 'center', color: '#ff015b', }}>{p.nationality}</td>
        </tr>
      );
    })
    
    return (
      <div style={{display: 'flex', flexDirection: 'column'}} >
      <div style={{flex: 1}}>
        <table style={{ textAlign: 'center', background: 'transparent' }}>
            <caption style={{ flex: '100 0 auto', marginTop: '5px', paddingBottom: '20px', fontWeight: 'bold', color: '#fff', borderBottom: '2px solid #fff', fontSize: '1.5em'  }}>Squad</caption>
          <tbody style={{ borderBottom: 0, borderTop: 0, }}>
            {players}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default TeamRosters;