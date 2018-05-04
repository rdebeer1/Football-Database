import React, { Component } from 'react';
import 'react-table/react-table.css'
import ReactTable from "react-table"

class Schedule extends Component {

  getTrProps = (state, row, instance) => {
    if (row) {
      return {
        style: {
          background: '#fff',
          borderColor: 'transparent',
        }
      }
    }
    return {}
  }
  getTheadGroupProps = () => {
    return {
      style: {
        color: '#fff',
        fontSize: '1em',
        background: 'transparent',
        borderColor: 'transparent'
      }
    }
  }
  getTheadThProps = () => {
    return {
      style: {
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
  getTheadTrProps = () => {
    return {
      style: {
        boxShadow: 'none',
        borderColor: 'transparent'
      }
    }
  }
  render() {
    
    const { leagueFixtures } = this.props

    return (
      <div>
        <ReactTable
          style={{ textAlign: 'center', color: '#242424', borderColor: 'transparent' }}
          showPagination={false}
          data={leagueFixtures}
          columns={[
            {
              Header: 'Away',
              columns: [
                {
                  Header: '',
                  id: 'awayTeamName',
                  accessor: d => d.awayTeamName
                },
              ]
            },
            {
              Header: 'Score',
              columns: [
                {
                  width: 50,
                  Header: '',
                  style: { fontWeight: 'bold', color: '#fff', background: '#38003c' },
                  id: 'result.goalsAwayTeam',
                  accessor: d => d.result.goalsAwayTeam
                },
                {
                  width: 50,
                  style: { fontWeight: 'bold', color: '#fff', background:'#38003c'},
                  Header: '',
                  id: 'result.goalsHomeTeam',
                  accessor: d => d.result.goalsHomeTeam
                },
              ]
            },
            {
              Header: 'Home',
              columns: [
                {
                  Header: '',
                  id: 'homeTeamName',
                  accessor: d => d.homeTeamName
                },
              ]
            },
          ]}
          minRows={0}
          getTrProps={this.getTrProps}
          getTheadGroupProps={this.getTheadGroupProps}
          getTdProps={this.getTdProps}
          getTheadThProps={this.getTheadThProps}
          getTheadGroupTrProps={this.getTheadGroupProps}
          getTheadGroupThProps={this.getTheadGroupProps}
          getProps={this.getTdProps}
          getTheadProps={this.getTheadTrProps}
        />

      </div>
    )
  }
}
export default Schedule;