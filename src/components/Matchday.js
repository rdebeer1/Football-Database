import React, { Component } from 'react';

class Matchday extends Component {

  render() {
    const { matchday } = this.props

    const styles = {
     
    }

    return (
      <div>
        <div style={{ textAlign: 'center', fontSize: '1em', color: '#fff', margin: '1em' }}> Matchday: {matchday} </div>
      </div>
    )
  }
}
export default Matchday;