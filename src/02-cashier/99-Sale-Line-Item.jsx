import React from 'react';
// import { Link } from 'react-router-dom'

class Template extends React.Component {
  render() {
    const recordLine = { display: "flex", height: "25px" }
      const ckButt = { height: "25px", width: "25px", verticalAlign: "middle" }
      const lineTextCont = { display: "flex", paddingTop: "6px", width: "100%" }
        const lineDesc = { textAlign: "left", width: "80%" }
        const linePrice = { textAlign: "right", width: "20%", paddingRight: "4px" }
    return(
      <div style={recordLine}>
        <input style={ckButt} type="checkbox" id="ok" name="leakoil" value="ok" />
        <div style={lineTextCont}>
          <div style={lineDesc}>{this.props.name.substring(0, 9)}</div>
          <div style={linePrice}>{this.props.price}</div>
        </div>
      </div>
    )
  }
}

export default Template;
