import React, { Component } from 'react'
import VisMenu from './00-1-Per-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createUser(
      $active: Boolean!,
      $address: String!,
      $birthDate: String!,
      $email: String!,
      $firstName: String!,
      $gender: String!,
      $hireDate: String!,
      $lastName: String!,
      $password: String!,
      $phone: String!,
      $pic: String!,
      $role: String!,

            )
  {
    createUser( active: $active, address: $address, birthDate: $birthDate, email: $email, firstName: $firstName, gender: $gender, hireDate: $hireDate, lastName: $lastName, password: $password, phone: $phone, pic: $pic, role: $role ){
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
// $transactionsIds: [ID!],
// $transactions: [UsertransactionsTransaction!]

// , transactionsIds: $transactionsIds, transactions: $transactions

// transactionsIds
// transactions

class AddNewEmployee extends Component {
  constructor(props){
    super(props)
    this.state = { active: "", address: "", birthDate: "", email: "", firstName: "", gender: "", hireDate: "", lastName: "", password: "", phone: "", pic: "", role: "", transactionsIds: "", transactions: "" }
  }

  exe1 = ()=>{
    console.log("Adding User: ")

    this.props.mutate({
      variables: {
        // active: this.state.active ,
        active: (this.state.active === "true" ? true : false) ,
        address: this.state.address ,
        birthDate: this.state.birthDate ,
        email: this.state.email ,
        firstName: this.state.firstName ,
        gender: this.state.gender ,
        hireDate: this.state.hireDate ,
        lastName: this.state.lastName ,
        password: this.state.password ,
        phone: this.state.phone ,
        pic: `${this.state.pic}?raw=true` ,
        role: this.state.role
      }
    })

    this.setState({  active: "", address: "", birthDate: "", email: "", firstName: "", gender: "", hireDate: "", lastName: "", password: "", phone: "", pic: "", role: "", transactionsIds: "", transactions: "" })
  }
// transactionsIds: this.state.transactionsIds ,
// transactions: this.state.transactions


  render(){
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

        <div style={pageSty}>
            <h2>Add New Employee Record.</h2>

            <div style={mySty}>
              <form>
                <div> <label style={labelSty}>First Name:  </label> <input style={inputSty} type="text" placeholder="First Name..." value={this.state.firstName} onChange={ (event) => { this.setState({ firstName: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Last Name:  </label> <input style={inputSty} type="text" placeholder="Last Name..." value={this.state.lastName} onChange={ (event) => { this.setState({ lastName: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Birth aDate:  </label> <input style={inputSty} type="text" placeholder="Birth Date..." value={this.state.birthDate} onChange={ (event) => { this.setState({ birthDate: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Gender:  </label> <input style={inputSty} type="text" placeholder="Gender..." value={this.state.gender} onChange={ (event) => { this.setState({ gender: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Email:  </label> <input style={inputSty} type="email" placeholder="Email..." value={this.state.email} onChange={ (event) => { this.setState({ email: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Phone:  </label> <input style={inputSty} type="text" placeholder="Phone..." value={this.state.phone} onChange={ (event) => { this.setState({ phone: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Role:  </label> <input style={inputSty} type="text" placeholder="Role..." value={this.state.role} onChange={ (event) => { this.setState({ role: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Password:  </label> <input style={inputSty} type="text" placeholder="Password..." value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Hire aDate:  </label> <input style={inputSty} type="text" placeholder="Hire Date..." value={this.state.hireDate} onChange={ (event) => { this.setState({ hireDate: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Address:  </label> <input style={inputSty} type="text" placeholder="Address..." value={this.state.address} onChange={ (event) => { this.setState({ address: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Prifile Picture:  </label> <input style={inputSty} type="text" placeholder="Profile Picture..." value={this.state.pic} onChange={ (event) => { this.setState({ pic: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Active:  </label> <input style={inputSty} type="text" placeholder="Active..." value={this.state.active} onChange={ (event) => { this.setState({ active: event.target.value }) } } /></div>
              </form>


              <br/>

              <button style={btnSty} onClick={()=>{this.exe1()}} >Add Employee</button>
            </div>
        </div>


      </div>
    )
  }
}


export default graphql(MUTATION)(AddNewEmployee)
