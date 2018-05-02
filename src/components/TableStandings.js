import React, { Component } from 'react'
import 'react-table/react-table.css'
import ReactTable from "react-table"

class TableStandings extends Component {
  
  getTrProps = (state, rowInfo, instance) => {
    if (rowInfo) {
      return {
        style: {
          background: rowInfo.row.position === 1 ? "#e4e4e4" : rowInfo.row.position < 5 ? "#eeeeee" : rowInfo.row.position === 5 ? "#f8f8f8" : rowInfo.row.position < 18 ? "#ffffff" : "#eeeeee",
          borderColor: 'transparent', 
        }
      }
    }
    return{}
  }

  getTheadThProps = () => {
      return {
        style: {
          color: '#fff',
          fontSize: '1.2em',
          borderColor: 'transparent'
        }
      }
  }
  getTdProps = () => {
    return {
      style: {
        borderColor: 'transparent'
      }
    }
  }

  render() {
    const { handleOnTeamClick } = this.props
    const { handleOpen } = this.props
    const { leagueData } = this.props

    const styles = {
      crest: {
        flex: '100 0 auto',
        width: '30px',
        height: '30px',
        cursor: 'pointer'
      },
    }

    return(
      <div>
        <ReactTable
          style={{ textAlign: 'center', color: '#242424', borderColor: 'transparent'}}
          showPagination={false}
          data={leagueData}
          columns={[
            {
              Header: 'POS',
              id: 'position',
              accessor: d => d.position
            },
            {
              Header: 'Club ',
              id: 'CrestURI',
              accessor: d => 
                <span onClick={() => handleOnTeamClick(d._links.team.href)}>
                <img style={styles.crest} src={d.crestURI} alt='' onClick={handleOpen}/>
                </span>
            },
            {
              Header: 'Played',
              id: 'playedGames',
              accessor: d => d.playedGames
            },
            {
              Header: 'Won',
              id: 'wins',
              accessor: d => d.wins
            },
            {
              Header: 'Drawn',
              id: 'draws',
              accessor: d => d.draws
            },
            {
              Header: 'Lost',
              id: 'losses',
              accessor: d => d.losses
            },
            {
              Header: 'GF',
              id: 'goals',
              accessor: d => d.goals
            },
            {
              Header: 'GA',
              id: 'goalsAgainst',
              accessor: d => d.goalsAgainst
            },
            {
              Header: 'GD',
              id: 'goalDifference',
              accessor: d => d.goalDifference
            },
            {
              Header: 'Points',
              id: 'points',
              accessor: d => d.points
            },
          ]}
          defaultPageSize={20}
          getTrProps={this.getTrProps}
          getTheadThProps={this.getTheadThProps}
          getTdProps={this.getTdProps}
        />
        
      </div>
    )
  }
}
export default TableStandings;
