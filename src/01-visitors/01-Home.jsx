import React, { Component } from 'react'
import VisMenu from './00-1-Vis-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import PosPic from '../00-gralComps/img/pos1.png'


export default class extends Component {
  render(){
    const pimgCont = { width: "50%", margin: "0px auto" }
    const PPSty = { width: "100%", height: "auto" }
    const ConCon = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>
        <div style={ConCon}>
          <h1>Web-Based P.O.S.</h1>
          <hr/>
          <p>We are a young company with a web-based Point of Sale that provides a secure and simple solution for any type of sales, incorporating different levels of management, so you can provide your personal with the right credentials to execute their work, all that without the need of expensive hardware.</p>
          <div style={pimgCont}>
            <img style={PPSty} src={PosPic} alt="Missing POS Pic"/>
          </div>
          <p>Create employee profiles and roles, have the power to review the transactions and even edit them when need it. </p>
          <p>This product will work with any Desktop, Laptop, or Tablet Computer with any O.S.  you can easily repurpose an old computer and will work just fine, although a touchscreen will make the experience more seamless for your costumers and employees. </p>
        </div>
    </div>
    )
  }
}
