import React, { Component } from 'react';
import 'react-table/react-table.css'
import ReactTable from "react-table"

class TeamRosters extends Component {
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
        color: '#38003c',
        fontSize: '1.25em',
        background: 'transparent',
        borderColor: 'transparent'
      }
    }
  }
  getTheadThProps = () => {
    return {
      style: {
        color: '#38003c',
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
  getTheadTrProps = () => {
    return {
      style: {
        boxShadow: 'none',
        borderColor: 'transparent'
      }
    }
  }
  render() {

    const { teamRosters } = this.props

    return (
      <div style={{
        fontFamily: 'Premier League', lineHeight: '1.75em'}}>
        <ReactTable
          style={{ textAlign: 'center', color: '#242424', borderColor: 'transparent'}}
          showPagination={false}
          data={teamRosters}
          columns={[
              {
                Header: '',
                id: 'jerseyNumber',
                accessor: d => d.jerseyNumber || '-'
              },
              {
                minWidth: 150,
                Header: 'Name',
                id: 'name',
                accessor: d => d.name
              },
              {
                minWidth: 150,
                Header: 'Position',
                id: 'position',
                accessor: d => d.position
              },
              {
                minWidth: 150,
                Header: 'Nationality',
                id: 'nationality',
                accessor: d => d.nationality
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

export default TeamRosters;