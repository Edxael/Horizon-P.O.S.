import React, { Component } from 'react'
import Menu from './00-Time-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Template from './04-Time-Line-Temp.jsx'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'

class TimeRSearch extends Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  render(){
    console.log("this.props.data:")
    console.log(this.props.data);
    const { loading, allTimeRecords } = this.props.data
    console.log("All Time Records: ", allTimeRecords)
    MyLocStorage.add('lm_allTimeRecords', allTimeRecords )

    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "50%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <Menu/>

          <div style={pageSty}>
            <h2>Search Time-Cards DataBase</h2>
              <p><strong>To find a TimeCard type one of the following:</strong>Employee Name, Date, Time.</p>

              <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
                onChange={ (event) => { this.setState({ query: event.target.value }) } } />

              {
                !loading && allTimeRecords
                .filter((TimeCard)=>{ return ( (`${TimeCard.in} ${TimeCard.out} ${TimeCard.user.firstName} ${TimeCard.user.lastName}`).toLowerCase().includes(this.state.query.toLowerCase()) ) })
                .map((TimeCard)=>{ return( <Template key={TimeCard.id} id={TimeCard.id}
                      fname={TimeCard.user.firstName} lname={TimeCard.user.lastName}
                      in={TimeCard.in} out={TimeCard.out} /> ) })
              }

          </div>

      </div>
    )
  }
}


const QUERY = gql`
  query {
    allTimeRecords{
      id
      in
      out
      user {
        id
        firstName
        lastName
      }
    }
  }
`

export default graphql(QUERY)(TimeRSearch)
