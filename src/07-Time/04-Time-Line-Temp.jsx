import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

class Template extends React.Component {
  render() {
    const ContStyle = { width: "70%", border: "2px solid black", padding:"7px", margin:"10px auto", display: "flex", backgroundColor: "rgba(224, 249, 24, 0.5)" }
    // const PicStyle = { height:"150px", width: "auto" }
    const InfoSty = { padding: "10px", textAlign: "left" }
    return(
      <div style={ContStyle} >


        <div style={InfoSty}>
          <div><strong>Name: </strong>{this.props.employee}</div>
          <div><strong>Date: </strong>{this.props.in}</div>
          <div><strong>Time In: </strong>{this.props.in}</div>
          <div><strong>Time Out: </strong>{this.props.out}</div>

          <div><strong>More Info..: </strong><Link to={`/time/${this.props.id}`}>LINK</Link></div>
        </div>

      </div>
    )
  }
}

export default Template;
