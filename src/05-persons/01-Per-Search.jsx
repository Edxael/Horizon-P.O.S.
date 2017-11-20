import React, { Component } from 'react'
import VisMenu from './00-1-Per-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Template from '../00-gralComps/02-Template.jsx'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'

class PerSearch extends Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  render(){
    console.log(this.props.data.allUsers)
    const { loading, allUsers } = this.props.data
    MyLocStorage.add('lm_allUsers', allUsers )
    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "50%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>
        <VisMenu/>


        <div style={pageSty}>
          <h2>Search Employees DataBase</h2>
            <p><strong>To find an Employee type one of the following:</strong> First Name, Last Name, Role, Phone</p>

            <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
              onChange={ (event) => { this.setState({ query: event.target.value }) } } />

            {
              !loading && allUsers
              .filter((employee)=>{ return ( (`${employee.firstName} ${employee.lastName} ${employee.role} ${employee.phone} ${employee.gender}`).toLowerCase().includes(this.state.query.toLowerCase()) ) })
              .map((employee)=>{ return( <Template key={employee.id} id={employee.id} name={`${employee.firstName} ${employee.lastName}`}
                    gender={employee.gender} bday={employee.birthDate} pic={employee.pic} role={employee.role} phone={employee.phone} email={employee.email} /> ) })
            }

        </div>

      </div>
    )
  }
}

const QUERY = gql`
  query {
    allUsers{
      id
      active
      address
      birthDate
      email
      firstName
      gender
      hireDate
      lastName
      password
      phone
      pic
      role
    }
  }
`

export default graphql(QUERY)(PerSearch)
