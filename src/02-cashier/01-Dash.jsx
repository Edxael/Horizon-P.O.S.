import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import V1Menu from './00-1-Cash-Menu.jsx'
import V2Menu from './00-2-Cash-Menu.jsx'
import V3Menu from './00-3-Cash-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
// import UPic from '../00-gralComps/img/s1.jpg'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'

export default class extends Component {
  state = { redirect: false, cuser: {} }

  exe1 = ()=>{
    console.log("inside of Exe1");
    this.setState({ redirect: true })
  }

  componentDidMount(){
    this.setState({ cuser: MyLocStorage.get('currentUser') })
    console.log("Current User: ", MyLocStorage.get('currentUser'))


  }

  render(){
    const btn1 = { width: "150px", height: "30px", marginRight: "35px", backgroundColor: "rgba(102, 48, 190, 0.5)" }
    const btn2 = { width: "150px", height: "30px", marginRight: "4px", backgroundColor: "rgba(66, 221, 11, 0.5)" }
    const btn3 = { width: "150px", height: "30px", marginRight: "1px", backgroundColor: "rgba(236, 14, 0, 0.5)" }
    // const contSty = { display: "flex" }
    const Rcont = { padding: "0px 15px" }
    const ConPill = { display: "flex", justifyContent: "center" }
    const UInfo = { paddingLeft: "15px", textAlign: "left" }
    const title2 = { textAlign: "center" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px", display: "flex" }
    const ppic = { border: "2px solid black", height: "325px", width: "auto" }
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

            {
              MyLocStorage.get('currentUser').role === "manager" ? <V3Menu/> :
              MyLocStorage.get('currentUser').role === "cashier" ? <V2Menu/> : <V1Menu/>
            }


          </div>
          <div style={Rcont}>
            <div style={title2}>PERSONAL DASHBOARD</div>
            <br/>

            <div style={ConPill}>
              <div>
                <img style={ppic} src={this.state.cuser.pic} alt="Missing Person"/>
              </div>
              <div style={UInfo}>
                <p><strong>Name: </strong>{`${this.state.cuser.firstName} ${this.state.cuser.lastName}`}</p>
                <p><strong>Role: </strong>{this.state.cuser.role}</p>
                <p><strong>B-Date: </strong>{this.state.cuser.birthDate}</p>
                <p><strong>Gender: </strong>{this.state.cuser.gender}</p>
                <p><strong>Email: </strong>{this.state.cuser.email}</p>
                <p><strong>Phone: </strong>{this.state.cuser.phone}</p>
                <p><strong>Hire Date: </strong>{this.state.cuser.hireDate}</p>
                <p><strong>Adress: </strong>{this.state.cuser.address}</p>

                <div>
                  { this.state.redirect ? <Redirect push to="/" /> : <button onClick={this.exe1} style={btn1}>Profile Log-Out</button> }
                  <button style={btn2}>Time Clock--In</button>
                  <button style={btn3}>Time Clock-Out</button>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    )
  }
}
