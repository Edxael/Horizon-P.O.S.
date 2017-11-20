import React, { Component } from 'react'
import VisMenu from './00-1-Per-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


const MUTATION = gql`
  mutation updateUser(
    $id: ID!,
    $active: Boolean!,
    $role: String!,
    $password: String!,
    $firstName: String!,
    $lastName: String!,
    $phone: String!,
    $pic: String!,
    $birthDate: String!,
    $gender: String!,
    $email: String!,
    $address: String!
  )
  {
    updateUser( id: $id, active: $active, role: $role, password: $password, firstName: $firstName, lastName: $lastName, phone: $phone, pic: $pic, birthDate: $birthDate, gender: $gender, email: $email, address: $address )
    {
      id
      active
      role
      password
      firstName
      lastName
      phone
      pic
      birthDate
      gender
      email
      address
    }
  }
`

class UpdateEmployee extends Component {
  constructor(props){
    super(props)
    this.state = { show: false, updated: false, firstName: "", lastName: "", birthDate: "", gender: "", email: "", phone: "", password: "", pic: "", address: "", active: "", role: "", hireDate: "", id: "" }
  }

  exe1 = ()=>{
    console.log("Profile Updated.")
    this.props.mutate({
      variables: {
              id: this.state.id ,
              active: (this.state.active === "true" ? true : false) ,
              password: this.state.password ,
              firstName: this.state.firstName ,
              lastName: this.state.lastName ,
              phone: this.state.phone ,
              pic: `${this.state.pic}?raw=true` ,
              birthDate: this.state.birthDate ,
              gender: this.state.gender ,
              email: this.state.email ,
              address: this.state.address,
              role: this.state.role
            }
    })

    this.setState({ updated: true })
    setTimeout(()=>{ this.setState({ updated: false }) }, 4500)
  }


  componentDidMount(){
    let usersDb = MyLocStorage.get('lm_allUsers')
    const token = this.props.match.params.id
    let currentProfile = usersDb.filter((x)=>{ return x.id === token }).reduce((z)=>{return z})

    this.setState({ pic: currentProfile.pic.replace("?raw=true", "") , firstName: currentProfile.firstName , lastName: currentProfile.lastName , birthDate: currentProfile.birthDate , gender: currentProfile.gender , email: currentProfile.email , phone: currentProfile.phone , password: currentProfile.password , address: currentProfile.address , active: currentProfile.active , role: currentProfile.role, hireDate: currentProfile.hireDate, id: currentProfile.id })
    this.setState({ show: true })
  }



  render(){
    console.log(this.state.empro )

    const Infocont = { padding: "0px 15px", width: "100%", textAlign: "left" }
    const updated = { textAlign: "center", padding: "15px", backgroundColor: "rgb(149, 255, 112)" }
    const UInfo = { marginTop: "10px" }
    const title2 = { textAlign: "center" }
    const labelSty = { marginLeft: "10px" }
    const inputSty = { width: "100%", padding: "5px" }
    const ppic = { border: "2px solid black", width: "231px", height: "325px" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px", backgroundColor: "rgb(249, 190, 162)" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

        <div>
          <h2>Employee Profile</h2>



          { this.state.show ?

            <div>
              <img style={ppic} src={`${this.state.pic}?raw=true`} alt="Missing"/>
              <div style={Infocont}>

                <form>
                    <div style={UInfo}> <label style={labelSty}>First Name:  </label> <input style={inputSty} type="text" value={this.state.firstName} onChange={ (event) => { this.setState({ firstName: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Last Name:  </label> <input style={inputSty} type="text" value={this.state.lastName} onChange={ (event) => { this.setState({ lastName: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Birth Date:  </label> <input style={inputSty} type="text" value={this.state.birthDate} onChange={ (event) => { this.setState({ birthDate: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Gender:  </label> <input style={inputSty} type="text" value={this.state.gender} onChange={ (event) => { this.setState({ gender: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>E-Mail:  </label> <input style={inputSty} type="text" value={this.state.email} onChange={ (event) => { this.setState({ email: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Phone:  </label> <input style={inputSty} type="text" value={this.state.phone} onChange={ (event) => { this.setState({ phone: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Password:  </label> <input style={inputSty} type="text" value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Pic:  </label> <input style={inputSty} type="text" value={this.state.pic} onChange={ (event) => { this.setState({ pic: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Address:  </label> <input style={inputSty} type="text" value={this.state.address} onChange={ (event) => { this.setState({ address: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Active:  </label> <input style={inputSty} type="text" value={this.state.active} onChange={ (event) => { this.setState({ active: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Role:  </label> <input style={inputSty} type="text" value={this.state.role} onChange={ (event) => { this.setState({ role: event.target.value }) } } /></div>
                </form>

                <br/>
                <div>
                  <div><strong>Employee Since: </strong>{this.state.hireDate}</div>
                  <div><strong>Employee ID: </strong>{this.state.id}</div>
                </div>

                <br/>

                { this.state.updated ? <div style={updated}>Changes has been made, please Log Out and Log In to see changes on empro</div> : <div style={title2}>Click Button to execute changes.</div> }
                <br/>






              </div>
            </div>


            : <div>Loading Employee Data....</div>
          }

          <button style={btnSty} onClick={()=>{this.exe1()}} >Update Employee</button>


        </div>

      </div>
    )
  }
}


export default graphql(MUTATION)(UpdateEmployee)
