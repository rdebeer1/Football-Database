import React, { Component } from 'react';

class Title extends Component {

  render() {
    const { leagueCaption } = this.props

    const styles = {
      container: {
        display: 'flex',
        flex: 1,
        fontFamily: 'Premier League',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5vw'
      },
    }

    return (
      <div>
        {leagueCaption}
      </div>
    )
  }
}
export default Title;