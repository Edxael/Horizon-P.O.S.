import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VisMenu extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "20px 0px 0px 0px", margin: "0px 7px", backgroundColor: "rgb(155, 194, 203)", border: "1px solid black", width: "30%", height: "70px", fontSize: "40px" }
    const ConCon = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px" }
    return(
      <div>
        <h2>Admin Menu</h2>
        <hr/>
        <br/>

        <div style={ConCon}>
          <div  style={menuCont}>
            <Link style={btn1} to="/C1">Personal Dash</Link>
            <Link style={btn1} to="/P1">Products</Link>
          </div>

          <div  style={menuCont}>
            <Link style={btn1} to="/Pe1">Employees</Link>
            <Link style={btn1} to="/T1">Sales-Reports</Link>
          </div>
        </div>


        <br/>
      </div>
    )
  }
}
