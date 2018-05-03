import React, { Component } from 'react'
import 'react-table/react-table.css'
import ReactTable from "react-table"
const overlay=require("../assets/scss/images/overlay.png")

class TableStandings extends Component {
  state={
    expanded: {}
  }
  onExpandedChange = (expanded) => {
    this.setState({ expanded })
  }

  getTrProps = (state, rowInfo, instance) => {
    if (rowInfo) {
      return {
        style: {
          background: rowInfo.index === 0 ? "#e4e4e4" : rowInfo.index < 4 ? "#eeeeee" : rowInfo.index === 4 ? "#f8f8f8" : rowInfo.index < 17 ? "#ffffff" : rowInfo.index <= 19 ? "#eeeeee" : "#38003c",
          borderColor: 'transparent', 
        }
      }
    }
    return {}
  }

  getTheadThProps = () => {
      return {
        style: {
          textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b',
          color: '#fff',
          fontSize: '1.2em',
          borderColor: 'transparent'
        }
      }
  }

  render() {
    const { handleOnTeamClick } = this.props
    const { handleOpen } = this.props
    const { leagueData } = this.props
    const { teamFixtures } = this.props
    const { matchday } = this.props

    const styles = {
      crest: {
        width: '30px',
        height: '30px',
        cursor: 'pointer'
      },
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const recentFixture = teamFixtures.map((fix, i) => {
      if ((fix.matchday > matchday - 1) && fix.matchday < matchday + 1 && fix.status === ('FINISHED' || 'POSTPONED') ) {
        let d = new Date(fix.date);
        let recentDate = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        return (
          <table style={{ textAlign: 'center' }} key={fix.date + i}>
            <caption style={{ flex: '100 0 auto', margin: '5px', fontWeight: 'bold', color: '#fff', fontSize: '1.2em', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}><span style={{ fontWeight: 'bold', color: '#fff', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}>Recent Result</span> - {recentDate}</caption>
            <tbody>
              <tr style={{display: 'flex'}}>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.homeTeamName}</td>
                <td style={{ fontWeight: 'bold', color: '#fff', backgroundColor: '#38003c', textAlign: 'center' }}>{fix.result.goalsHomeTeam}</td>
                <td style={{ fontWeight: 'bold', color: '#fff', backgroundColor: '#38003c', textAlign: 'center' }}>{fix.result.goalsAwayTeam}</td>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.awayTeamName}</td>
              </tr>
            </tbody>
          </table>
        );
      } else if ((fix.matchday > matchday -2 ) && fix.matchday < matchday ){
        let d = new Date(fix.date);
        let recentDate = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        return (
          <table style={{ textAlign: 'center' }} key={fix.date + i}>
            <caption style={{ flex: '100 0 auto', margin: '5px', fontWeight: 'bold', color: '#fff', fontSize: '1.2em', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}><span style={{ fontWeight: 'bold', color: '#fff', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}>Recent Result</span> - {recentDate}</caption>
            <tbody>
              <tr style={{display: 'flex'}}>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.homeTeamName}</td>
                <td style={{ fontWeight: 'bold', color: '#fff', backgroundColor: '#38003c', textAlign: 'center' }}>{fix.result.goalsHomeTeam}</td>
                <td style={{ fontWeight: 'bold', color: '#fff', backgroundColor: '#38003c', textAlign: 'center' }}>{fix.result.goalsAwayTeam}</td>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.awayTeamName}</td>
              </tr>
            </tbody>
          </table>
        );
      }
      return recentFixture;
    });

    const nextFixture = teamFixtures.map((fix, i) => {
      if ((fix.matchday > matchday -1 ) && fix.matchday < matchday + 1 && fix.status !== "FINISHED") {
        let d = new Date(fix.date);
        let nextDate = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        let time = d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        return (
          <table style={{ textAlign: 'center' }} key={fix.date + i}>
            <caption style={{ flex: '100 0 auto', margin: '5px', fontWeight: 'bold', color: '#fff', fontSize: '1.2em', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}><span style={{ fontWeight: 'bold', color: '#fff', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}>Next Fixture </span>- {nextDate}</caption>
            <tbody>
              <tr style={{ display: 'flex' }}>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.homeTeamName}</td>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', backgroundColor: '#76766f' }}>{time}</td>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.awayTeamName}</td>
              </tr>
            </tbody>
          </table>
        );
      } else if ((fix.matchday > matchday -1) && fix.matchday < matchday ) {
        let d = new Date(fix.date);
        let nextDate = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
        let time = d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        return (
          <table style={{ textAlign: 'center' }} key={fix.date + i}>
            <caption style={{ flex: '100 0 auto', margin: '5px', fontWeight: 'bold', color: '#fff', fontSize: '1.2em', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}><span style={{ fontWeight: 'bold', color: '#fff', textShadow: '-.5px -.5px 0 #ff015b, .5px -.5px 0 #ff015b, -.5px .5px 0 #ff015b, .5px .5px 0 #ff015b' }}>Next Fixture </span>- {nextDate}</caption>
            <tbody>
              <tr style={{ display: 'flex' }}>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.homeTeamName}</td>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', backgroundColor: '#76766f' }}>{time}</td>
                <td style={{ flex: 1, textAlign: 'center', color: '#38003c' }}>{fix.awayTeamName}</td>
              </tr>
            </tbody>
          </table>
        );
      }
      return nextFixture;
    });

    return(
      <div>
        <div style={{ textAlign: 'center', fontSize: '1.5em', color: '#fff', margin: '1em', textShadow: '-.5px -.5px 0 #38003c, .5px -.5px 0 #38003c, -.5px .5px 0 #38003c, .5px .5px 0 #38003c'}}> Matchday: {matchday} </div>
        <ReactTable
          style={{ textAlign: 'center', color: '#242424', borderColor: 'transparent'}}
          showPagination={false}
          data={leagueData}
          columns={[
            {
            expander: true,
            sortable: false,
            Header: () => <span className="icon fa-plus-square"></span>,
            },
            {
              width: 50,
              Header: 'POS',
              id: 'position',
              accessor: d => d.position
            },
            {
              width: 100,
              Header: 'Club ',
              id: 'CrestURI',
              accessor: d => 
                <img style={styles.crest} src={d.crestURI} alt='' onClick={handleOpen}/>
            },
            {
              width: 100,
              Header: 'Played',
              id: 'playedGames',
              accessor: d => d.playedGames
            },
            {
              width: 80,
              Header: 'Won',
              id: 'wins',
              accessor: d => d.wins
            },
            {
              width: 80,
              Header: 'Drawn',
              id: 'draws',
              accessor: d => d.draws
            },
            {
              width: 80,
              Header: 'Lost',
              id: 'losses',
              accessor: d => d.losses
            },
            {
              width: 60,
              Header: 'GF',
              id: 'goals',
              accessor: d => d.goals
            },
            {
              width: 60,
              Header: 'GA',
              id: 'goalsAgainst',
              accessor: d => d.goalsAgainst
            },
            {
              width: 60,
              Header: 'GD',
              id: 'goalDifference',
              accessor: d => d.goalDifference
            },
            {
              Header: 'Points',
              id: 'points',
              accessor: d => d.points
            },
          ]}
          SubComponent={row => {
            return (
              <div style={{ padding: "20px", display: 'flex', flexDirection: 'column', backgroundImage: "url(" + overlay + ")"}}>
                <div style={{ flex: 1 }}> {recentFixture}</div>
                <div style={{ flex: 1 }}> {nextFixture}</div>
            </div>
            );
          }}
          expanded={this.state.expanded}
          onExpandedChange={this.onExpandedChange}
          defaultPageSize={20}
          getTrProps={this.getTrProps}
          getTheadThProps={this.getTheadThProps}
          getTdProps={(state, rowInfo, column, instance) => {
              return {
                style: {
                  borderColor: 'transparent'
                },
                onClick: (e, handleOriginal) => {
                  handleOnTeamClick(rowInfo.original._links.team.href);
                  if (handleOriginal) {
                    handleOriginal();
                  }
                }
              }
          }}
        />
        
      </div>
    )
  }
}
export default TableStandings;
