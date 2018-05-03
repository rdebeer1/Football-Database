import React, { Component } from 'react';

class TeamRosters extends Component {
  render() {
    const { teamRosters } = this.props
    
    const players = teamRosters.map((p, i) => {
      return (
        <tr style={{ background: 'transparent', borderBottom: '2px solid #08f1ff', borderTop: 'none', borderColor: '#08f1ff' }} key={p.dateOfBirth + i}>
          <td style={{ textAlign: 'center', color: '#ff015b', fontWeight: 'bold' }}>{p.jerseyNumber || '-'}</td>
          <td style={{ textAlign: 'center', color: '#38003c' }}>{p.name}</td>
          <td style={{ textAlign: 'center', color: '#38003c' }}>{p.position}</td>
          <td style={{ textAlign: 'center', color: '#38003c' }}>{p.nationality}</td>
        </tr>
      );
    })
    
    return (
      <div style={{display: 'flex', flexDirection: 'column'}} >
      <div style={{flex: 1}}>
        <table style={{ textAlign: 'center', background: 'transparent' }}>
            <caption style={{ flex: '100 0 auto', marginTop: '5px', paddingBottom: '20px', fontWeight: 'bold', color: '#38003c', borderBottom: '2px solid #08f1ff', fontSize: '1.5em'  }}>Squad</caption>
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