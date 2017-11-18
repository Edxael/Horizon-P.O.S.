import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "aquamarine", border: "1px solid black" }
    return(
      <div>
        <div style={menuCont}>
          <Link style={btn1} to="/C1">Dash</Link>
          <Link style={btn1} to="/C2">P-Update</Link>
          <Link style={btn1} to="/C3">SALES-POS</Link>
          <Link style={btn1} to="/M1">Manager Menu</Link>
        </div>
      </div>
    )
  }
}
