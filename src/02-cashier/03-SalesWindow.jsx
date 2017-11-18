import React, { Component } from 'react'
// import VisMenu from './00-1-Cash-Menu.jsx'
// import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import { Redirect } from 'react-router-dom'

export default class extends Component {
  state = { redirect: false, password: "", email: "" }

  exe1 = ()=>{
    console.log("inside of Exe1");

      this.setState({ redirect: true })

  }

  render(){
    const btn1 = { margin: "0px auto", display:"block" }
    return(
      <div>
        <div>HORIZON P.O.S. -  SALES WINDOW</div>
        <hr/>
        <h3>This is the place for the point of sale</h3>


        <div>
          <div>
            <input type="text"/><br/>
            <input type="text"/>
            <hr/>



          </div>
          <div>

          </div>
        </div>



        <br/>
        { this.state.redirect ? <Redirect push to="/C1" /> : <button onClick={this.exe1} style={btn1}>Dash-Board</button> }
      </div>
    )
  }
}

// <VisMenu/>
