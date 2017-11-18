import React, { Component } from 'react'
import VisMenu from './00-1-Vis-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

export default class extends Component {
  state = { show: false }

  exe1 = () => {
    console.log("Mesage Sent exe1");
    this.setState({ show: true })
    setTimeout( ()=>{this.setState({ show: false })} , 3500 )
  }

  render(){
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px" }
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black", textAlign: "center" }
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px", textAlign: "left" }
    const inputSty = { width: "100%" }
    const logCont = { width: "50%", margin: "0px auto", display:"block" }
    const btn1 = { margin: "0px auto", display:"block" }
    const textArea = { width: "100%", height: "100px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

          <div style={pageSty}>
          <h1> Contact Us </h1>

            <div style={logCont}>

              {
                this.state.show ?

                <div style={mySty}>
                  <h1>Thansk for your mesage.</h1>
                  <h3>We will contact you shortly.</h3>
                </div>

                :

                <div>
                  <div>
                      <label style={labelSty} for="uname">Name:</label>
                      <input style={inputSty} type="text" id="name" name="name" />
                  </div>
                  <div>
                      <label style={labelSty} for="email">Email:</label>
                      <input style={inputSty} type="email" id="email" name="email" />
                  </div>
                  <div>
                      <label style={labelSty} for="msg">Comments:</label>
                      <textarea style={textArea} id="msg" name="user_message"></textarea>
                  </div>

                  <br/>
                  <button onClick={this.exe1} >Send Message</button>
                </div>

              }



            </div>

        </div>
      </div>
    )
  }
}
