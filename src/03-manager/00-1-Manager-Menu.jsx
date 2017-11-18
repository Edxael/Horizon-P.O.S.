import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VisMenu extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "aquamarine", border: "1px solid black" }
    return(
      <div>
        <div style={menuCont}>
          <Link style={btn1} to="/C1">P-Dash</Link>
          <Link style={btn1} to="/P1">Products</Link>
          <Link style={btn1} to="/Pe1">Employees</Link>
          <Link style={btn1} to="/T1">Sales-Reports</Link>
        </div>
      </div>
    )
  }
}
