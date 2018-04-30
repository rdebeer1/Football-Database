import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableStandings extends Component {
  
  render() {
    const { handleOnTeamClick } = this.props
    const { handleOpen } = this.props
    const { leagueData } = this.props
    const styles = {
      container: {
        fontFamily: 'Premier League',
        overflow: 'scroll',
        display: 'flex',
        flex: 4,
        padding: '1vw',
        border: '.1px white solid'
        
      },
      tableContainer: {
        flex: 1,
        fontFamily: 'Premier League',
        backgroundColor: 'transparent',
        overflow: 'scroll',
        height: '100vh'
      },
      team: {
        height: '1vw',
        width: '5vw',
        color: 'white',
        textOverflow: 'none',
        whiteSpace: 'no-wrap',
        fontSize: '1vw',
        textAlign: 'center',
      },
      header: {
        border: 'none',
        top: 0,
      },
      font: {
        width: '2vw',
        height: '8vw',
        color: 'white',
        fontSize: '2vw',
        textAlign: 'center',
        textOverflow: 'none',
        whiteSpace: 'no-wrap',
      },
      positionFirst: {
        backgroundColor: '#FF0047',
        height: '8vw'
      },
      positionFive: {
        backgroundColor: '#E10040',
        height: '8vw'
      },
      midTable: {
        backgroundColor: '#8A0036',
        height: '8vw'
      },
      relegation: {
        backgroundColor: '#AB0039',
        height: '8vw'
      },
      crest: {
        height: '2.5vw',
        width: '2.5vw'
      },
    }
    const standings = leagueData.map((standings, key) => {
      return (
          standings.position === 1 ?
        <TableRow displayBorder={false} style={styles.positionFirst}key={standings.teamName + key}>
          <TableRowColumn style={styles.font}>{standings.position}</TableRowColumn>
          <TableRowColumn style={styles.font}>
            <span onClick={() => handleOnTeamClick(standings._links.team.href)}>
              <img style={styles.crest} src={standings.crestURI} alt='' onClick={handleOpen} />
            </span>
          </TableRowColumn>
          <TableRowColumn style={styles.team}>{standings.teamName}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.playedGames}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.wins}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.draws}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.losses}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goals}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalsAgainst}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalDifference}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.points}</TableRowColumn>
        </TableRow> :
        standings.position < 5 ?
        <TableRow displayBorder={false} style={styles.positionFive} key={standings.teamName + key}>
          <TableRowColumn style={styles.font}>{standings.position}</TableRowColumn>
          <TableRowColumn style={styles.font}>
            <span onClick={() => handleOnTeamClick(standings._links.team.href)}>
              <img style={styles.crest} src={standings.crestURI} alt='' onClick={handleOpen} />
            </span>
          </TableRowColumn>
          <TableRowColumn style={styles.team}>{standings.teamName}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.playedGames}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.wins}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.draws}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.losses}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goals}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalsAgainst}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalDifference}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.points}</TableRowColumn>
        </TableRow> :
        standings.position < 17 ?
        <TableRow displayBorder={false} style={styles.midTable} key={standings.teamName + key}>
          <TableRowColumn style={styles.font}>{standings.position}</TableRowColumn>
          <TableRowColumn style={styles.font}>
            <span onClick={() => handleOnTeamClick(standings._links.team.href)}>
              <img style={styles.crest} src={standings.crestURI} alt='' onClick={handleOpen} />
            </span>
          </TableRowColumn>
          <TableRowColumn style={styles.team}>{standings.teamName}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.playedGames}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.wins}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.draws}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.losses}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goals}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalsAgainst}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalDifference}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.points}</TableRowColumn>
        </TableRow> :
        <TableRow displayBorder={false} style={styles.relegation} key={standings.teamName + key}>
          <TableRowColumn style={styles.font}>{standings.position}</TableRowColumn>
          <TableRowColumn style={styles.font}>
            <span onClick={() => handleOnTeamClick(standings._links.team.href)}>
              <img style={styles.crest} src={standings.crestURI} alt='' onClick={handleOpen} />
            </span>
          </TableRowColumn>
          <TableRowColumn style={styles.team}>{standings.teamName}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.playedGames}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.wins}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.draws}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.losses}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goals}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalsAgainst}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.goalDifference}</TableRowColumn>
          <TableRowColumn style={styles.font}>{standings.points}</TableRowColumn>
        </TableRow> 
      );
    })
    return(
      <div style={styles.container}>
        <Table style={styles.tableContainer} selectable={false} bodyStyle={{overflow: 'visible'}}fixedHeader={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={styles.header}>
            <TableRow style={styles.header}>
              <TableHeaderColumn style={styles.font}>POS</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}></TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>Team</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>Pl</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>W</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>D</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>L</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>GF</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>GA</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>GD</TableHeaderColumn>
              <TableHeaderColumn style={styles.font}>PTS</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {standings}
          </TableBody>
        </Table>
      </div>
    )
  }
}
export default TableStandings;
