import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Schedule extends Component {
  render() {
    const { leagueFixtures } = this.props
    const styles = {
      flex: {
        fontFamily: 'Premier League',
        overflow: 'scroll',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        border: '.1px white solid',
        marginBottom: '1vw'
      },
      table: {
        fontFamily: 'Premier League',
        fontSize: '1vw',
        backgroundColor: 'transparent',
        display: 'flex',
        flex: 1,
      },
      font: {
        height: '2vw',
        color: 'white',
        fontSize: '1.5vw',
        textAlign: 'center',
        textOverflow: 'none',
        whiteSpace: 'no-wrap',
      },
      match: {
        color: '#fff',
        height: '2vw'
      }
    }
    const fixtures = leagueFixtures.map((game, key) => {
      return (
        <TableRow displayBorder={false} style={styles.match} key={'game_' + key}>
          <TableRowColumn style={styles.font}>@{game.awayTeamName}</TableRowColumn>
          <TableRowColumn style={styles.font}>v.</TableRowColumn>
          <TableRowColumn style={styles.font}>{game.homeTeamName}</TableRowColumn>
          <TableRowColumn style={styles.font}>{game.result.goalsAwayTeam}</TableRowColumn>
          <TableRowColumn style={styles.font}>:</TableRowColumn>
          <TableRowColumn style={styles.font}>{game.result.goalsHomeTeam}</TableRowColumn>
        </TableRow>
      );
    })

    return (
      <div style={styles.flex}>
        <Table style={styles.table} selectable={false}>
          <TableBody displayRowCheckbox={false}>
          {fixtures}
          </TableBody>
        </Table>
      </div>
    )
  }
}
export default Schedule;