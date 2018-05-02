import React, { Component } from 'react';
import ReactTable from "react-table"

class TeamFixtures extends Component {
  render() {
    const { teamFixtures } = this.props
    const { matchday } = this.props
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const recentFixture = teamFixtures.map((fix, i) => {
      if ((fix.matchday > matchday - 1) && fix.matchday < matchday + 1) {
        let d = new Date(fix.date);
        let recentDate = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        return (
          <table style={{ flex: '100 0 auto', flexDirection: 'column', textAlign: 'center' }} key={fix.date + i}>
            <caption style={{ flex: '100 0 auto', margin: '5px', fontWeight: 'bold'}}><span style={{ fontWeight: 'bold' }}>Recent Result</span> - {recentDate}</caption>
            <tbody>
              < tr style={{ dispaly: 'block' }}>
                <th style={{ textAlign: 'center' }}>Home</th>
                <th style={{ textAlign: 'center' }}></th>
                <th style={{ textAlign: 'center' }}></th>
                <th style={{ textAlign: 'center' }}>Away</th>
              </tr>
              <tr style={{ dispaly: 'block' }} key={fix.date + i}>
                <td style={{ width: '50%', overflow: 'hidden' }}>{fix.homeTeamName}</td>
                <td style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#38003c',  overflow: 'hidden' }}>{fix.result.goalsHomeTeam}</td>
                <td style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#38003c',  overflow: 'hidden' }}>{fix.result.goalsAwayTeam}</td>
                <td style={{ width: '50%', overflow: 'hidden' }}>{fix.awayTeamName}</td>
              </tr>
            </tbody>
          </table>
        );
      }
      return recentFixture;
    });
    const nextFixture = teamFixtures.map((fix, i) => {
      if ((fix.matchday > matchday) && fix.matchday < matchday + 2) {
        let d = new Date(fix.date);
        let nextDate = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        let time = d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        return (
          <table style={{ flex: '100 0 auto', flexDirection: 'column', textAlign: 'center'}} key={fix.date + i}>
            <caption style={{ flex: '100 0 auto', margin: '5px', fontWeight: 'bold'}}><span style={{ fontWeight: 'bold' }}>Next Fixture </span>- {nextDate}</caption>
            <tbody>
              <tr style={{ dispaly: 'block' }}>
                <th style={{textAlign: 'center' }} >Home</th>
                <th style={{textAlign: 'center' }} ></th>
                <th style={{textAlign: 'center' }}>Away</th>
              </tr>
              < tr style={{dispaly: 'block'}} >
                <td style={{ width: '50%', overflow: 'hidden' }}>{fix.homeTeamName}</td>
                <td style={{ flex: '100 0 auto', overflow: 'hidden', fontWeight: 'bold', color: 'white', backgroundColor: '#76766f' }}>{time}</td>
                <td style={{ width: '50%', overflow: 'hidden' }}>{fix.awayTeamName}</td>
              </tr>
            </tbody>
          </table>
        );
      }
      return nextFixture;
    });
    return (
      <div style={{ display: 'flex', flexDirection: 'column', color: '#242424'}}>
        {recentFixture}
        {nextFixture}
      </div>
    )
  }
}
export default TeamFixtures;