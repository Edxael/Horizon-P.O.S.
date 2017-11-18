import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VisMenu extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "1px solid black" }
    return(
      <div>
        <h2>Products Dash-Board</h2>
        <div style={menuCont}>
          <Link style={btn1} to="/P1">Search</Link>
          <Link style={btn1} to="/P2">Add</Link>
          <Link style={btn1} to="/P3">Update</Link>
          <Link style={btn1} to="/P4">Delete</Link>
          <Link style={btn1} to="/P5">Inventory</Link>
          <Link style={btn1} to="/M1">Manager Menu</Link>
        </div>

          <hr/>
          <br/>
      </div>
    )
  }
}
