import React, { Component } from 'react';

class Matchday extends Component {
  render() {
    const { leagueMatchday } = this.props
    const styles = {
      container: {
        display: 'flex',
        flex: 1,
        fontFamily: 'Premier League',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5vw'
      }
    }
    return (
      <div style={styles.container}>
        Matchday: {leagueMatchday}
      </div>
    )
  }
}
export default Matchday;