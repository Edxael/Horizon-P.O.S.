import React, { Component } from 'react'
import VisMenu from './00-1-Vis-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import { Redirect } from 'react-router-dom'

export default class extends Component {
  state = { redirect: false, password: "", email: "" }

  exe1 = ()=>{
    console.log("inside of Exe1");
    if(this.state.password === "koda"){
      this.setState({ redirect: true })
    }
  }

  render(){
    const logCont = { width: "50%", margin: "0px auto", display:"block", textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const btn1 = { margin: "0px auto", display:"block" }
    const ConCon = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

        <div style={ConCon}>

          <h2>Log-In</h2>

          <div style={logCont}>
            <div>
                <label style={labelSty} >Email:</label>
                <input style={inputSty} type="email" placeholder="Email..." value={this.state.email} onChange={ (event) => { this.setState({ email: event.target.value }) } } />
            </div>
            <div>
                <label style={labelSty} >Password:</label>
                <input style={inputSty} type="password" placeholder="Password..." value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } />
            </div>
            <br/>
            { this.state.redirect ? <Redirect push to="/C1" /> : <button onClick={this.exe1} style={btn1}>Log-In</button> }
          </div>
        </div>

      </div>
    )
  }
}
