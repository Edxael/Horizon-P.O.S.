import React, { Component } from 'react'
import Logo1 from './img/logo1.png'

export default class extends Component {
  render(){
    // const ImgCon = { padding: "0px 15%" }
    const ImgSty = { width: "100%", height: "auto" }
    return(
      <div>
        <img style={ImgSty} src={Logo1} alt="Missing Logo"/>
      </div>
    )
  }
}
