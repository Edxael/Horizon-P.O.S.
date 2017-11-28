import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "aquamarine", border: "1px solid black" }
    return(
      <div>
        <div style={menuCont}>
          <Link style={btn1} to="/T1">Search Sales</Link>
          <Link style={btn1} to="/T2">Add Sale</Link>
          <Link style={btn1} to="/T3">Update Sale</Link>
          <Link style={btn1} to="/T4">Delete Sale</Link>
          <Link style={btn1} to="/T5">P & L</Link>
          <Link style={btn1} to="/M1">Admin Menu</Link>
          <Link style={btn1} to="/">Log-Out</Link>
        </div>
      </div>
    )
  }
}
