import React, { Component } from 'react';

class LeagueTableRow extends Component {

  render() {
    const { leagueData } = this.props
    const styles = {
      container: {
        fontFamily: 'Premier League',
        flexDirection: 'column',
        overflow: 'scroll',
        color: 'white',
        display: 'flex',
        flexGrow: 1
      },
      matchContainer: {
        fontFamily: 'Premier League',
        borderCollapse: 'collapse', 
        fontSize: '1.25vw',
        height:'100%',
      },
      positionFirst: {
        backgroundColor: '#FF0047',
      },
      positionFive: {
        backgroundColor: '#E10040',
      },
      midTable: {
        backgroundColor: '#8A0036',
      },
      relegation: {
        backgroundColor: '#AB0039',
      },
      position: {
        flex: 1,
        borderBottom: 'solid #360037 1px',

      },
      teams: {
        flex: 1,
        borderBottom: 'solid #360037 1px',

      },
      number: {
        flex: 1,
        borderBottom: 'solid #360037 1px',
      },
      crest: {
        height: '1.5em ',
        width: '1.5em',
      },
      standings: {
        flex: 1,
        fontFamily: 'Premier League',
        flexDirection: 'column',
        overflow: 'scroll',
      },

    }
    const standings = leagueData.map((standings, key) => {
      return (
          standings.position === 1 ? 
        <tr style={styles.positionFirst}key={standings.teamName + key}>
          <td>{standings.position}</td>
          <td><img style={styles.crest} src={standings.crestURI} alt=''/></td>
          <td>{standings.teamName}</td>
          <td>{standings.playedGames}</td>
          <td>{standings.wins}</td>
          <td>{standings.draws}</td>
          <td>{standings.losses}</td>
          <td>{standings.goals}</td>
          <td>{standings.goalsAgainst}</td>
          <td>{standings.goalDifference}</td>
          <td>{standings.points}</td>
        </tr> :
        standings.position < 5 ?
        <tr style={styles.positionFive} key={standings.teamName + key}>
          <td>{standings.position}</td>
          <td><img style={styles.crest} src={standings.crestURI} alt='' /></td>
          <td>{standings.teamName}</td>
          <td>{standings.playedGames}</td>
          <td>{standings.wins}</td>
          <td>{standings.draws}</td>
          <td>{standings.losses}</td>
          <td>{standings.goals}</td>
          <td>{standings.goalsAgainst}</td>
          <td>{standings.goalDifference}</td>
          <td>{standings.points}</td>
        </tr> :
        standings.position < 17 ?
        <tr style={styles.midTable} key={standings.teamName + key}>
          <td>{standings.position}</td>
          <td><img style={styles.crest} src={standings.crestURI} alt='' /></td>
          <td>{standings.teamName}</td>
          <td>{standings.playedGames}</td>
          <td>{standings.wins}</td>
          <td>{standings.draws}</td>
          <td>{standings.losses}</td>
          <td>{standings.goals}</td>
          <td>{standings.goalsAgainst}</td>
          <td>{standings.goalDifference}</td>
          <td>{standings.points}</td>
        </tr> :
        <tr style={styles.relegation} key={standings.teamName + key}>
          <td>{standings.position}</td>
          <td><img style={styles.crest} src={standings.crestURI} alt='' /></td>
          <td>{standings.teamName}</td>
          <td>{standings.playedGames}</td>
          <td>{standings.wins}</td>
          <td>{standings.draws}</td>
          <td>{standings.losses}</td>
          <td>{standings.goals}</td>
          <td>{standings.goalsAgainst}</td>
          <td>{standings.goalDifference}</td>
          <td>{standings.points}</td>
        </tr> 
      );
    })
    return(
      <div style={styles.container}>
        <table style={styles.matchContainer}>
          <tbody style={{textAlign: 'center'}}>
            <tr>
              <th>POS</th>
              <th></th>
              <th>Team</th>
              <th>Pl</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>PTS</th>
            </tr>
            {standings}
          </tbody>
        </table>
      </div>
    )
  }
}
export default LeagueTableRow;
//     return (
//     <div style={styles.container}>
//       <TableHeader />
//       <div style={styles.matchContainer}>
//         {
//         leagueData.map((standings, key) =>
//           <div style={styles.standings} key={standings.teamName}>
//             {standings.position === 1 ? 
//             <div style={styles.positionFirst}>
//               <div style={styles.position}>
//                 {standings.position}
//               </div>
//               <div style={styles.teams}>
//                 <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
//               </div>
//               <div style={styles.number}>
//                 {standings.playedGames}
//               </div>
//               <div style={styles.number}>
//                 {standings.wins}
//               </div>
//               <div style={styles.number}>
//                 {standings.draws}
//               </div>
//               <div style={styles.number}>
//                 {standings.losses}
//               </div>
//               <div style={styles.number}>
//                 {standings.goals}
//               </div>
//               <div style={styles.number}>
//                 {standings.goalsAgainst}
//               </div>
//               <div style={styles.number}>
//                 {standings.goalDifference}
//               </div>
//               <div style={styles.number}>
//                 {standings.points}
//               </div>
//             </div> :
//             standings.position < 5 ?
//             <div style={styles.positionFive}>
//               <div style={styles.position}>
//                 {standings.position}
//               </div>
//               <div style={styles.teams}>
//                       <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
//               </div>
//               <div style={styles.number}>
//                 {standings.playedGames}
//               </div>
//               <div style={styles.number}>
//                 {standings.wins}
//               </div>
//               <div style={styles.number}>
//                 {standings.draws}
//               </div>
//               <div style={styles.number}>
//                 {standings.losses}
//               </div>
//               <div style={styles.number}>
//                 {standings.goals}
//               </div>
//               <div style={styles.number}>
//                 {standings.goalsAgainst}
//               </div>
//               <div style={styles.number}>
//                 {standings.goalDifference}
//               </div>
//               <div style={styles.number}>
//                 {standings.points}
//               </div>
//             </div> :standings.position < 17 ?
//             <div style={styles.midTable}>
//               <div style={styles.position}>
//                 {standings.position}
//               </div>
//               <div style={styles.teams}>
//                 <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
//               </div>
//               <div style={styles.number}>
//                 {standings.playedGames}
//               </div>
//               <div style={styles.number}>
//                 {standings.wins}
//               </div>
//               <div style={styles.number}>
//                 {standings.draws}
//               </div>
//               <div style={styles.number}>
//                 {standings.losses}
//               </div>
//               <div style={styles.number}>
//                 {standings.goals}
//               </div>
//               <div style={styles.number}>
//                 {standings.goalsAgainst}
//               </div>
//               <div style={styles.number}>
//                 {standings.goalDifference}
//               </div>
//               <div style={styles.number}>
//                 {standings.points}
//               </div>
//             </div> : 
//              <div style={styles.relegation}>
//               <div style={styles.position}>
//                 {standings.position}
//                 </div>
//                 <div style={styles.teams}>
//                   <img style={styles.crest} src={standings.crestURI} alt='' /> {standings.teamName}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.playedGames}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.wins}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.draws}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.losses}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.goals}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.goalsAgainst}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.goalDifference}
//                 </div>
//                 <div style={styles.number}>
//                   {standings.points}
//                 </div>
//             </div>}
//           </div>
//           )
//         }
//         </div>
//       </div>
//     )
//   }
// }
// export default LeagueTableRow;