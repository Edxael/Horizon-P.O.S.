import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import VisMenu from './00-1-Cash-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import UPic from '../00-gralComps/img/s1.jpg'

export default class extends Component {
  state = { redirect: false }

  exe1 = ()=>{
    console.log("inside of Exe1");
    this.setState({ redirect: true })
  }

  render(){
    const btn1 = { margin: "0px auto", display:"block" }
    // const contSty = { display: "flex" }
    const Rcont = { padding: "0px 15px" }
    const ConPill = { display: "flex", justifyContent: "center" }
    const UInfo = { paddingLeft: "15px" }
    const title2 = { textAlign: "center" }
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
            <div style={title2}>PERSONAL DASHBOARD</div>
            <br/>

            <div style={ConPill}>
              <div>
                <img src={UPic} alt="Missing Person"/>
              </div>
              <div style={UInfo}>
                <p><strong>Name: </strong>Unknow</p>
                <p><strong>B-Date: </strong>Unknow</p>
                <p><strong>Email: </strong>Unknow</p>
                <p><strong>Phone: </strong>Unknow</p>
                <p><strong>Address: </strong>Unknow</p>

                <div>
                  { this.state.redirect ? <Redirect push to="/" /> : <button onClick={this.exe1} style={btn1}>Log-Out</button> }
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    )
  }
}
