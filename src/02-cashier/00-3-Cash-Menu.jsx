import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", flexDirection: "column"}
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgb(154, 147, 50)", border: "1px solid black", width: "200px" }
    const btn2 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgba(79, 206, 240, 0.5)", border: "1px solid black", width: "200px" }
    const btn3 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgba(0, 255, 64, 0.5)", border: "1px solid black", width: "200px" }
    const outCon = { borderRight: "7px solid white", height: "90%", paddingRight: "10px" }
    return(
      <div style={outCon}>

        <div style={menuCont}>
          <Link style={btn1} to="/C1">Personal Profile</Link>
          <Link style={btn1} to="/C2">Update Profile</Link>
          <hr/>
          <Link style={btn2} to="/C3">SALES-POS</Link>
          <hr/>
          <Link style={btn3} to="/M1">Admin Menu</Link>
        </div>

      </div>
    )
  }
}
