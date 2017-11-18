import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import VisMenu from './00-1-Cash-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

export default class extends Component {
  state = { redirect: false }

  exe1 = ()=>{
    console.log("inside of Exe1");
    this.setState({ redirect: true })
  }

  render(){
    const btn1 = { margin: "0px auto", display:"block" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>
        <div>DASHBOARD</div>

        <div>
          { this.state.redirect ? <Redirect push to="/" /> : <button onClick={this.exe1} style={btn1}>Log-Out</button> }
        </div>
      </div>
    )
  }
}
