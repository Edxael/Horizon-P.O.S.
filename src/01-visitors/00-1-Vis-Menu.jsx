import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class VisMenu extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgb(192, 199, 246)", border: "1px solid black" }
    return(
      <div>
        <div style={menuCont}>
          <Link style={btn1} to="/">Home</Link>
          <Link style={btn1} to="/v2">Ablout Us</Link>
          <Link style={btn1} to="/v3">Contact Us</Link>

          <Link style={btn1} to="/v5">Log In</Link>
        </div>
        <hr/>
        <br/>
      </div>
    )
  }
}

// <Link style={btn1} to="/v4">Join Us</Link>
