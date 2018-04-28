import React, {Component} from 'react';

class TableHeader extends Component {

  render() {
    const styles = {
      container: {
        fontFamily: 'Premier League',
        display: 'flex',
        flexDirection: 'column',
        font: '1vw',
        overflow: 'scroll',
      },
      table: {
        letterSpacing: '.02em',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      },
      header: {
        display: "flex", 
        flexDirection: "row-reverse",
        flex: 1,
      },
      headerIndex: {
        flex: 1,
        padding: '.5em',
        border: 'solid #360037 1px',
        borderRight: 0,
        fontWeight: 300,
        textAlign: 'center'
      },
      headerTeam: {
        padding: '.5em',
        flex: 1,
        border: 'solid #360037 1px',
        borderRight: 0,
        fontWeight: 400,
        textAlign: 'center'
      }
    }
    return (
      <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.headerIndex}>PTS</div>
            <div style={styles.headerIndex}>GD</div>
            <div style={styles.headerIndex}>GA</div>
            <div style={styles.headerIndex}>GF</div>
            <div style={styles.headerIndex}>L</div>
            <div style={styles.headerIndex}>D</div>
            <div style={styles.headerIndex}>W</div>
            <div style={styles.headerIndex}>PL</div>
            <div style={styles.headerTeam}>TEAM</div>
            <div style={styles.headerIndex}>POS</div>
          </div>
        </div>
    )
  }
}
export default TableHeader;