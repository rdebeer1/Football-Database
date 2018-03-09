import React, { Component } from 'react';

class LeagueTableRow extends Component {
  render() {
    const { standing } = this.props
    const styles = {
      positionFirst: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FF0047'
      },
      positionFive: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#E10040'
      },
      midTable: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#8A0036'
      },
      relegation: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#AB0039'
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
      },
      crest: {
        height: '1em',
      },
    }
    return (
      <div>
        {
        standing.map((standings, key) =>
          <div key={'standings_' + key}>
            {standings.position === 1 ? 
            <div style={styles.positionFirst}>
              <div style={styles.position}>
                {standings.position}
              </div>
              <div style={styles.teams}>
                <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
              </div>
              <div style={styles.number}>
                {standings.playedGames}
              </div>
              <div style={styles.number}>
                {standings.wins}
              </div>
              <div style={styles.number}>
                {standings.draws}
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
            </div> :
            standings.position < 5 ?
            <div style={styles.positionFive}>
              <div style={styles.position}>
                {standings.position}
              </div>
              <div style={styles.teams}>
                      <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
              </div>
              <div style={styles.number}>
                {standings.playedGames}
              </div>
              <div style={styles.number}>
                {standings.wins}
              </div>
              <div style={styles.number}>
                {standings.draws}
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
            </div> :standings.position < 17 ?
            <div style={styles.midTable}>
              <div style={styles.position}>
                {standings.position}
              </div>
              <div style={styles.teams}>
                <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
              </div>
              <div style={styles.number}>
                {standings.playedGames}
              </div>
              <div style={styles.number}>
                {standings.wins}
              </div>
              <div style={styles.number}>
                {standings.draws}
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
            </div> : 
             <div style={styles.relegation}>
              <div style={styles.position}>
                {standings.position}
                </div>
                <div style={styles.teams}>
                  <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
                </div>
                <div style={styles.number}>
                  {standings.playedGames}
                </div>
                <div style={styles.number}>
                  {standings.wins}
                </div>
                <div style={styles.number}>
                  {standings.draws}
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
            </div>}
          </div>
          )
        }
      </div>
    )
  }
}
export default LeagueTableRow;