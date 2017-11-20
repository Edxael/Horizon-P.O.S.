import React, { Component } from 'react'
import VisMenu from './00-1-Cash-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation updateUser(
    $id: ID!,
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
    updateUser( id: $id, password: $password, firstName: $firstName, lastName: $lastName, phone: $phone, pic: $pic, birthDate: $birthDate, gender: $gender, email: $email, address: $address )
    {
      id
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


class UpdateProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
        id: MyLocStorage.get('currentUser').id,
        password: MyLocStorage.get('currentUser').password,
        fname: MyLocStorage.get('currentUser').firstName,
        lname: MyLocStorage.get('currentUser').lastName,
        phone: MyLocStorage.get('currentUser').phone,
        pic: MyLocStorage.get('currentUser').pic,
        birthDate: MyLocStorage.get('currentUser').birthDate,
        gender: MyLocStorage.get('currentUser').gender,
        email: MyLocStorage.get('currentUser').email,
        address: MyLocStorage.get('currentUser').address,
        show: false
    }
  }

  exe1 = ()=>{
    console.log("Profile Updated.");
    this.props.mutate({
            variables:{
              id: this.state.id ,
              password: this.state.password ,
              firstName: this.state.fname ,
              lastName: this.state.lname ,
              phone: this.state.phone ,
              pic: `${this.state.pic}?raw=true` ,
              birthDate: this.state.birthDate ,
              gender: this.state.gender ,
              email: this.state.email ,
              address: this.state.address
            }
    })

    this.setState({ show: true })
    setTimeout(()=>{ this.setState({ show: false }) }, 4500)
  }

  render(){
    const tdata = MyLocStorage.get('currentUser').email
    console.log("TData: ", tdata)
    const Rcont = { padding: "0px 15px", width: "100%", textAlign: "left" }
    const updated = { textAlign: "center", padding: "15px", backgroundColor: "rgb(149, 255, 112)" }
    const UInfo = { marginTop: "10px" }
    const title2 = { textAlign: "center" }
    const labelSty = { marginLeft: "10px" }
    const inputSty = { width: "100%", padding: "5px" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px", display: "flex" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>
        <hr/>
        <br/>

        <div style={pageSty}>

          <div >
            <br/>
            <br/>
            <VisMenu/>
          </div>
          <div style={Rcont}>

            <div style={title2}>
              <h3>Update Profile Information</h3>
            </div>

            <form>
                <div style={UInfo}> <label style={labelSty}>First Name:  </label> <input style={inputSty} type="text" placeholder="Name..." value={this.state.fname} onChange={ (event) => { this.setState({ fname: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>Last Name:  </label> <input style={inputSty} type="text" placeholder="Name..." value={this.state.lname} onChange={ (event) => { this.setState({ lname: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>birthDate:  </label> <input style={inputSty} type="text" placeholder="birthDate..." value={this.state.birthDate} onChange={ (event) => { this.setState({ birthDate: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>gender:  </label> <input style={inputSty} type="text" placeholder="gender..." value={this.state.gender} onChange={ (event) => { this.setState({ gender: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>email:  </label> <input style={inputSty} type="text" placeholder="email..." value={this.state.email} onChange={ (event) => { this.setState({ email: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>phone:  </label> <input style={inputSty} type="text" placeholder="phone..." value={this.state.phone} onChange={ (event) => { this.setState({ phone: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>password:  </label> <input style={inputSty} type="text" placeholder="password..." value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>pic:  </label> <input style={inputSty} type="text" placeholder="pic..." value={this.state.pic} onChange={ (event) => { this.setState({ pic: event.target.value }) } } /></div>
                <div style={UInfo}> <label style={labelSty}>address:  </label> <input style={inputSty} type="text" placeholder="address..." value={this.state.address} onChange={ (event) => { this.setState({ address: event.target.value }) } } /></div>
            </form>

            <br/>

            { this.state.show ? <div style={updated}>Changes has been made, please Log Out and Log In to see changes on profile</div> : <div style={title2}>Click Button to execute changes</div> }
            <br/>
            <button style={btnSty} onClick={()=>{ this.exe1() }} >Update Profile</button>


          </div>
        </div>

      </div>
    )
  }
}


export default graphql(MUTATION)(UpdateProfile)
