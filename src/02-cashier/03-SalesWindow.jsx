import React, { Component } from 'react'
// import VisMenu from './00-1-Cash-Menu.jsx'
// import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import { Redirect } from 'react-router-dom'
import KeyPadImg from '../00-gralComps/img/key2.jpg'

export default class extends Component {
  state = { redirect: false, password: "", email: "" }

  exe1 = ()=>{
    console.log("inside of Exe1");
    this.setState({ redirect: true })
  }


  render(){
    // General Style
    const POSCont = { display: "flex", height: "80vh" }



    // LEFT STYLE
    const LeftCont = { width: "70%", border: "2px solid black", marginRight: "5px", padding: "15px", backgroundColor: "rgba(254, 254, 254, 0.5)" }
      const sknInp = { height: "35px", width: "100%", marginBottom: "5px" }
      const manInp = { height: "35px", width: "100%" }
      const btn1 = { margin: "0px auto", display:"block" }



    // RIGHT STYLE
    const RighCont = { width: "30%", border: "2px solid black", padding: "10px", backgroundColor: "rgba(254, 254, 254, 0.5)" }
      const ItemsCont = { backgroundColor: "rgb(251, 255, 175)", padding: "7px", border: "1px solid black", height: "80%" }

        const recordLine = { display: "flex", height: "25px" }
          const ckButt = { height: "25px", width: "25px", verticalAlign: "middle" }
          const lineTextCont = { display: "flex", paddingTop: "6px", width: "100%" }
            const lineDesc = { textAlign: "left", width: "80%" }
            const linePrice = { textAlign: "right", width: "20%", paddingRight: "4px" }

      const totalsCont = { backgroundColor: "rgb(175, 228, 255)", padding: "7px", border: "1px solid black", height: "14%", marginTop: "10px" }

        const totLineCont = { display: "flex", justifyContent: "space-between" }
          const totalNum = { textAlign: "right" }
          const totalTex = { textAlign: "right" }



    return(
      <div>
        <div>HORIZON P.O.S. -  SALES WINDOW</div>
        <hr/>



        <div style={POSCont}>

          <div style={LeftCont}>
            <input style={sknInp} type="text"/><br/>
            <input style={manInp} type="text"/>
            <hr/>
            <br/>

            <img src={KeyPadImg} alt="Missing KeyPad"/>

            <br/>
            <hr/>
            <button>Add Product</button>
            { this.state.redirect ? <Redirect push to="/C1" /> : <button onClick={this.exe1} style={btn1}>Dash-Board</button> }
          </div>

          <div style={RighCont}>
            <div style={ItemsCont}>

              <div style={recordLine}>
                <input style={ckButt} type="checkbox" id="ok" name="leakoil" value="ok" />
                <div style={lineTextCont}>
                  <div style={lineDesc}>Laptop Comp.</div>
                  <div style={linePrice}>1000.00</div>
                </div>
              </div>

              <div style={recordLine}>
                <input style={ckButt} type="checkbox" id="ok" name="leakoil" value="ok" />
                <div style={lineTextCont}>
                  <div style={lineDesc}>Potato Chips</div>
                  <div style={linePrice}>2.99</div>
                </div>
              </div>

              <div style={recordLine}>
                <input style={ckButt} type="checkbox" id="ok" name="leakoil" value="ok" />
                <div style={lineTextCont}>
                  <div style={lineDesc}>Wireless Mouse USB</div>
                  <div style={linePrice}>22.99</div>
                </div>
              </div>

              <div style={recordLine}>
                <input style={ckButt} type="checkbox" id="ok" name="leakoil" value="ok" />
                <div style={lineTextCont}>
                  <div style={lineDesc}>Notebook</div>
                  <div style={linePrice}>1.99</div>
                </div>
              </div>


            </div>


            <div style={totalsCont}>
              <div style={totLineCont}> <div style={totalTex}><strong>Sub Total:</strong></div> <div style={totalNum}>1027.97</div> </div>
              <div style={totLineCont}> <div style={totalTex}><strong>Taxes:</strong></div>     <div style={totalNum}>71.95</div> </div>
              <hr/>
              <div style={totLineCont}> <div style={totalTex}><strong>Total:</strong></div>     <div style={totalNum}>1195.95</div> </div>
            </div>
          </div>

        </div>



      </div>
    )
  }
}

// <VisMenu/>
