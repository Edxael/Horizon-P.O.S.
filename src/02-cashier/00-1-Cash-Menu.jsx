import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", flexDirection: "column"}
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgb(154, 147, 50)", border: "1px solid black", width: "200px" }
    const outCon = { borderRight: "3px solid white", height: "90%", paddingRight: "10px" }
    return(
      <div style={outCon}>
        <div style={menuCont}>
          <Link style={btn1} to="/C1">Personal Profile</Link>
          <Link style={btn1} to="/C2">Update Profile</Link>
          <Link style={btn1} to="/C3">SALES-POS</Link>
          <Link style={btn1} to="/M1">Manager Menu</Link>
        </div>


      </div>
    )
  }
}
