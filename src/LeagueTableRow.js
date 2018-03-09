import React, { Component } from 'react';

class LeagueTableRow extends Component {
  render() {
    const styles = {
      row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: `${({ position }) =>
          position === 1
            ? "#FF0047"
            : position < 5 ? "#E10040" : position > 17 ? "#8A0036" : "#AB0039"
          }`
      },
      position: {
        padding: '.5em',
        borderBottom: 'solid #360037 1px',
        width: '2em',
      },
      teams: {
        padding: '.5em',
        borderBottom: 'solid #360037 1px',
        width: '15em',
        textAlign: 'left',
      },
      number: {
        boxSizing: 'content-box',
        padding: '.5em',
        width: '2em',
        border: 'solid #360037 1px',
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
      }
    }
    const { standing } = this.props
    return (
      <div>
        {
        standing.map((standings, key) =>
          <div key={'standings_' + key}>
            <div style={styles.row} position={standings.position}>
              <div style={styles.position}>
                {standings.position}
              </div>
              <div style={styles.teams}>
                {standings.teamName}
              </div>
              <div style={styles.number}>
                {standings.playedGames}
              </div>
              <div style={styles.number}>
                {standings.wins}
              </div>
              <div style={styles.number}>
                {standings.drawn}
              </div>
              <div style={styles.number}>
                {standings.losses}
              </div>
              <div style={styles.number}>
                {standings.goals}
              </div>
              <div style={styles.number}>
                {standings.goalsAgainst}
              </div>
              <div style={styles.number}>
                {standings.goalDifference}
              </div>
              <div style={styles.number}>
                {standings.points}
              </div>
            </div>
          </div>
          )
        }
      </div>
    )
  }
}
export default LeagueTableRow;