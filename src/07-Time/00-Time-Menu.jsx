import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VisMenu extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "1px solid black" }
    return(
      <div>
        <h2>Time Card Admin-Area</h2>
        <div style={menuCont}>
          <Link style={btn1} to="/T1">Search</Link>
          <Link style={btn1} to="/T2">Add</Link>
          <Link style={btn1} to="/T4">Delete</Link>
          <Link style={btn1} to="/M1">Admin Menu</Link>
          <Link style={btn1} to="/">Log-Out</Link>
        </div>
        <hr/>
        <br/>
      </div>
    )
  }
}
