import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VisMenu extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "aquamarine", border: "1px solid black" }
    return(
      <div>

        <h2>EMPLOYEE DATABASE</h2>

        <div style={menuCont}>
          <Link style={btn1} to="/Pe1">Employee Search</Link>
          <Link style={btn1} to="/Pe2">Add Employee</Link>
          <Link style={btn1} to="/Pe4">Delete Employee</Link>
          <Link style={btn1} to="/M1">Manager Menu</Link>
        </div>

        <hr/>

      </div>
    )
  }
}


// <Link style={btn1} to="/Pe3">Update Employee</Link>
