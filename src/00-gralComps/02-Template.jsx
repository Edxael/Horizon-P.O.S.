import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

class Template extends React.Component {
  render() {
    const ContStyle = { width: "70%", border: "2px solid black", padding:"7px", margin:"10px auto", display: "flex", backgroundColor: "rgba(119, 247, 255, 0.5)" }
    const PicStyle = { height:"150px", width: "auto" }
    const InfoSty = { padding: "10px", textAlign: "left" }
    return(
      <div style={ContStyle} >

        <div>
          <img style={PicStyle} src={this.props.pic} alt="Missing Pic"/>
        </div>

        <div style={InfoSty}>
          <div><strong>Name: </strong>{this.props.name}</div>
          <div><strong>B-Date: </strong>{this.props.bday}</div>
          <div><strong>Gender: </strong>{this.props.gender}</div>
          <div><strong>Role: </strong>{this.props.role}</div>
          <div><strong>Email: </strong>{this.props.email}</div>
          <div><strong>Phone: </strong>{this.props.phone}</div>
          <div><strong>More Info..: </strong><Link to={`/per/${this.props.id}`}>LINK</Link></div>
        </div>

      </div>
    )
  }
}

export default Template;
