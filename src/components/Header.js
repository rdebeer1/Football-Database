import React, {Component} from 'react';

class  Header extends Component {

  render() {
    const styles = {
      table: {
        letterSpacing: '.02em',
        display: 'flex',
        flexDirection: 'column',
      },
      header: {
        display: "flex", 
        flexDirection: "row-reverse"
      },
      headerIndex: {
        width: '2.15em',
        padding: '.5em',
        border: 'solid #360037 1px',
        borderRight: 0,
        fontWeight: 300,
      },
      headerTeam: {
        flex: 1,
        paddingTop: '.5em',
        paddingBottom: '.5em',
        paddingLeft: '2.1em',
        border: 'solid #360037 1px',
        borderRight: 0,
        fontWeight: 400,
        textAlign: 'left'
      }
    }
    return (
      <div>
        <div style={styles.table}>
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
      </div>
    )
  }
}
export default Header;