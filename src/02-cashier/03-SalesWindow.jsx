import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal'
// import printJS from 'print-js'
    // "print-js": "^1.0.24",
import printJS from '../print-js'
import rlogo from '../00-gralComps/img/h20.jpg'


import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'



class ProductPOS extends Component {
  constructor(props){
    super(props)
    this.state = { query: "", redirect: false, skinput: "", mninput: "", sale: [], notfound: false, subtotal: 0, tax: 0 , total: 0, modalIsOpen: false, cash: 0, modal2IsOpen: false, }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

// ------------------------------------------------------------------------------------------------------------------------------

  openModal() {
      this.setState({modalIsOpen: true})
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

// ------------------------------------------------------------------------------------------------------------------------------

  openModal2() {
      this.setState({modal2IsOpen: true})
    }

    closeModal2() {
      this.setState({modal2IsOpen: false});
    }


// ------------------------------------------------------------------------------------------------------------------------------

  redirectToDashBoard = ()=>{
    console.log("inside of redirectToDashBoard");
    this.setState({ redirect: true })
  }


// ------------------------------------------------------------------------------------------------------------------------------


  scanerAddProduct = () => {
    console.clear()

    setTimeout( ()=>{
      let currentProduct = MyLocStorage.get('lm_allProducts').filter((x)=>{ return x.skbc === this.state.skinput })

      if( currentProduct[0] === undefined ){
        this.setState({ notfound: true })
        setTimeout( ()=>{ this.setState({ notfound: false }) } , 2500)
      }else{

        currentProduct = currentProduct[0]
        currentProduct.tosell = true

        let tempSale = this.state.sale
        tempSale.push(currentProduct)
        this.setState({ sale: tempSale })
        console.log(this.state.sale)

        let tempSubTot = Math.round( this.state.sale.reduce((acum, cval)=>{ return acum + cval.price }, 0) * 100 )/100
        const temptax = Math.round( tempSubTot * ( 0.07 ) * 100 )/100
        const tempTot = Math.round( temptax + tempSubTot * 100 )/100

        this.setState({ subtotal: tempSubTot, tax: temptax, total: tempTot })

      }
      setTimeout(()=>{ this.setState({ skinput: "" }) }, 500)
    } , 500)

  }


// ------------------------------------------------------------------------------------------------------------------------------


  addProduct = () => {
    console.clear()

    let currentProduct = MyLocStorage.get('lm_allProducts').filter((x)=>{ return x.skbc === this.state.mninput })

    if( currentProduct[0] === undefined ){
      this.setState({ notfound: true })
      setTimeout( ()=>{ this.setState({ notfound: false }) } , 2500)
    }else{

      currentProduct = currentProduct[0]
      currentProduct.tosell = true

      let tempSale = this.state.sale
      tempSale.push(currentProduct)
      this.setState({ sale: tempSale })
      console.log(this.state.sale)

      let tempSubTot = Math.round( this.state.sale.reduce((acum, cval)=>{ return acum + cval.price }, 0) * 100 )/100
      const temptax = Math.round( tempSubTot * ( 0.07 ) * 100 )/100
      const tempTot = Math.round( temptax + tempSubTot * 100 )/100

      this.setState({ subtotal: tempSubTot, tax: temptax, total: tempTot })

    }
    this.setState({ mninput: "" })
  }


// ------------------------------------------------------------------------------------------------------------------------------

cashExe = ()=>{
  console.clear()
  console.log("cashExe() Executed: ")

  let cashBack = Math.round((parseFloat(this.state.mninput) - this.state.total) * 100)/100


  this.setState({ cash: cashBack })
  console.clear()
}

// ------------------------------------------------------------------------------------------------------------------------------


cardExe = ()=> {
  console.clear()
  console.log("Card Executed");
}


// ------------------------------------------------------------------------------------------------------------------------------


  cancelSale = ()=>{
    this.setState({ subtotal: 0, tax: 0 , total: 0, skinput: "", mninput: "", sale: [], })
    console.clear()
  }

// ------------------------------------------------------------------------------------------------------------------------------

  ckbox1 = (idx)=>{
    console.clear()
    console.log("Check Box Selected")
    console.log(idx)
    let tempSale = this.state.sale

    // let maped1 = tempSale.map((x, idx2)=>{ return (idx2 === idx ? x.tosell = false : x ) })
    // for(let x = 0; x < tempSale.length; x++){
    //   if(x === idx){
    //     tempSale[x].tosell = false
    //   }
    // }

    tempSale[idx].tosell = false

    this.setState({ sale: tempSale })
    console.log(this.state.sale)
  }

// ------------------------------------------------------------------------------------------------------------------------------

deleteItems = ()=>{
  console.clear()
  console.log("Deleting Selected Items")
  let tempSale = this.state.sale.filter((x)=>{ return x.tosell === true })

  this.setState({ sale: tempSale })

  setTimeout( ()=>{
    let tempSubTot = Math.round( this.state.sale.reduce((acum, cval)=>{ return acum + cval.price }, 0) * 100 )/100
    const temptax = Math.round( tempSubTot * ( 0.07 ) * 100 )/100
    const tempTot = Math.round( temptax + tempSubTot * 100 )/100
    console.log("changing totals states")
    this.setState({ subtotal: tempSubTot, tax: temptax, total: tempTot })
    console.log(this.state.sale)
  } , 600 )
}

// ------------------------------------------------------------------------------------------------------------------------------

printing1 = () => {
  console.clear()
  console.log("Printing")

      const pdata = this.state.sale
      console.log(pdata);

      pdata.map((x)=>{ return { name:  (x.name).substring(0, 12), price:  (x.price).toFixed(2) } })

  // const mydata = this.state.sale
  // const pdata = [ ]
  //
  // for(let x = 0; x < mydata.length; x++ ){
  //   pdata.push( { name: mydata[x].name.substring(0, 12), price: mydata[x].price.toFixed(2) } )
  // }

  pdata.push( { name: "_____________", price: "______" } )
  pdata.push( { name: "Sub_Total:", price: this.state.subtotal.toFixed(2) } )
  pdata.push( { name: "Tax:", price: this.state.tax.toFixed(2) } )
  pdata.push( { name: "Total:", price: this.state.total.toFixed(2) } )
  console.log("Data To Print: ");
  console.log(pdata)


  printJS({
      printable: pdata,
      header: "HORIZON",
      properties: [ "name", "price"],
      type: 'json'
    })

    // https://www.cssscript.com/javascript-library-printing-elements-page-print-js/
    // http://printjs.crabbly.com/
}

// ------------------------------------------------------------------------------------------------------------------------------

pr2 = () => {
  console.log("Printing")

  let mydata = this.state.sale
  let pdata = [ ]

  for(let x = 0; x < mydata.length; x++ ){
    pdata.push( { name: mydata[x].name.substring(0, 12), price: mydata[x].price.toFixed(2) } )
  }

  pdata.push( { name: "_____________", price: "______" } )
  pdata.push( { name: "Sub_Total:", price: this.state.subtotal.toFixed(2) } )
  pdata.push( { name: "Tax:", price: this.state.tax.toFixed(2) } )
  pdata.push( { name: "Total:", price: this.state.total.toFixed(2) } )


  console.log(pdata)


  printJS({
      header: "HORIZON",
      printable: pdata,
      properties: [ "name", "price"],
      maxWidth: 1000,
      type: 'json'
    })

}

// ------------------------------------------------------------------------------------------------------------------------------

pr3 = () => {
  console.log("Printing")

  let mydata = this.state.sale
  let pdata = [ ]

  for(let x = 0; x < mydata.length; x++ ){
    pdata.push( { name: mydata[x].name.substring(0, 12), price: mydata[x].price.toFixed(2) } )
  }

  pdata.push( { name: "_____________", price: "______" } )
  pdata.push( { name: "Sub_Total:", price: this.state.subtotal.toFixed(2) } )
  pdata.push( { name: "Tax:", price: this.state.tax.toFixed(2) } )
  pdata.push( { name: "Total:", price: this.state.total.toFixed(2) } )


  console.log(pdata)


  printJS({
      header: "HORIZON",

      printable: pdata,
      properties: [ "name", "price"],
      maxWidth: 1000,
      type: 'json'
    })

}


// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------

  render(){
    const { allProducts } = this.props.data
    MyLocStorage.add('lm_allProducts', allProducts )

    // General Style
    const POSCont = { display: "flex", height: "80vh"}



    // LEFT STYLE
    const LeftCont = { width: "70%", border: "2px solid black", marginRight: "5px", padding: "15px", backgroundColor: "rgba(254, 254, 254, 0.5)" }
      const sknInp = { height: "35px", width: "80%", marginBottom: "5px", paddingLeft: "8px", backgroundColor: "rgba(255, 121, 112, 0.5)" }
      const manInp = { height: "35px", width: "80%", paddingLeft: "8px", backgroundColor: "rgba(143, 237, 49, 0.5)" }
      const pnfSty = { backgroundColor: "red", width: "80%", height: "35px", textAlign: "center", fontSize: "30px", marginLeft: "10%" }
      const keypadCont = {  }
        const roll = { marginBottom: "5px" }
          const kbtn = { height: "50px", width: "150px", backgroundColor: "rgba(110, 123, 244, 0.5)" }
          const Ebtn = { height: "50px", width: "150px", backgroundColor: "rgba(79, 0, 2, 0.5)" }


    // RIGHT STYLE
    const RighCont = { width: "30%", border: "2px solid black", padding: "10px", backgroundColor: "rgba(254, 254, 254, 0.5)" }
      const ItemsCont = { backgroundColor: "rgb(251, 255, 175)", padding: "7px", border: "1px solid black", height: "80%" }
      const totalsCont = { backgroundColor: "rgb(175, 228, 255)", padding: "7px", border: "1px solid black", height: "13%", marginTop: "10px" }

        const totLineCont = { display: "flex", justifyContent: "space-between" }
          const totalNum = { textAlign: "right" }
          const totalTex = { textAlign: "right" }

          const recordLine = { display: "flex", height: "25px" }
            const ckButt = { height: "25px", width: "25px", verticalAlign: "middle" }
            const lineTextCont = { display: "flex", paddingTop: "6px", width: "100%" }
              const lineDesc = { textAlign: "left", width: "80%" }
              const linePrice = { textAlign: "right", width: "20%", paddingRight: "4px" }

    // Styles of Pop-Up Windows
    const customStyles = {
      content : { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', padding: '100px', backgroundColor: "rgba(36, 255, 229, 0.5)", border: "3px solid black" },

      linec: { display: "flex",
        strong1:{ width: "70%",
        },
        number: { width: "30%", textAlign: "right", color: "blue" }
      },

      button: { width: "250px", height: "40px", margin: "0px auto", display: "block", backgroundColor: "rgb(182, 148, 238)" }
    }

    const customStyles2 = {
      content : { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', padding: '100px', backgroundColor: "rgba(36, 255, 229, 0.5)", border: "3px solid black"  },

      // <div style={customStyles2.linec}><strong style={customStyles2.linec.strong1}>Suceesfully Charged Customer's Card.</strong></div>

      linec: {
        display: "flex",

        strong1:{
          // border: "1px solid blue",
          width: "100%",
        }
      },

      button: { width: "250px", height: "40px", margin: "0px auto", display: "block", backgroundColor: "rgb(182, 148, 238)" }
    }


    return(
      <div>


        <div>HORIZON P.O.S. -  SALES WINDOW</div>
        <hr/>
        <br/>

        <div style={POSCont}>

          <div style={LeftCont}>
            <hr/>
            <br/>


            { this.state.notfound ? <div style={pnfSty}>CODE Not Found :(</div> :
                <input style={sknInp} type="text" value={this.state.skinput} placeholder="ONLY Scanner Input..."
                  onChange={
                    (eve)=>{
                        this.setState( { skinput: eve.target.value })
                        console.log("skinput: ", this.state.skinput.length )
                        if(this.state.skinput.length === 7){
                          this.scanerAddProduct()
                        }
                    }
                  } autoFocus={true} />
            }

            <br/>

            { this.state.notfound ? <div style={pnfSty}>CODE Not Found :(</div> :
                <input style={manInp} type="text" value={this.state.mninput} placeholder= "CASH and Manual Code Input..."
                       onChange={(eve)=>{this.setState( { mninput: eve.target.value })}} />
            }

            <br/><br/>
            <hr/><br/>

            <div  style={keypadCont}>
              <div style={roll}>
                <button style={kbtn} onClick={ ()=>{ this.addProduct() } }>Manual Code Input</button>
                <button style={kbtn} onClick={ this.deleteItems } >Delete Items</button >
                <button style={kbtn} onClick={ ()=>{ this.cancelSale() } } >Cancel Sale</button>
              </div>

              <div style={roll}>
                <button style={kbtn} onClick={ ()=>{
                    this.cashExe()
                    this.openModal() } }>Finish CASH Sale</button>

                <button style={kbtn} onClick={ ()=>{
                    this.cardExe()
                    this.openModal2() } }>Finish CARD Sale</button>

                  <button style={kbtn} onClick={ this.printing1 }>Test Printer</button>
              </div>
            </div>

            <h4>For CASH and Manual Code Input, use Key-Pad.</h4>
            <hr/>
            { this.state.redirect ? <Redirect push to="/C1" /> : <button style={Ebtn}
                                                                  onClick={ ()=>{

                                                                    this.redirectToDashBoard()
                                                                  } } >Exit Sales Window</button> }

          </div>

          <div style={RighCont}>

            <div style={ItemsCont}>
                {
                  this.state.sale[0] === undefined ? <div><br/><h1>No Items Yet</h1></div> :
                  this.state.sale.map((product, idx)=>{ return (

                      <div style={recordLine} key={product.id}>
                        <input  style={ckButt}
                                type="checkbox"

                                onChange={()=>{ this.ckbox1(idx) }}
                                />
                        <div style={lineTextCont}>
                          <div style={lineDesc}>{(product.name.substring(0, 15))}</div>
                          <div style={linePrice}>{product.price}</div>
                        </div>
                      </div>
                  )})
                }
            </div>

            <div style={totalsCont}>
              <div style={totLineCont}> <div style={totalTex}><strong>Sub Total:</strong></div> <div style={totalNum}>{this.state.subtotal}</div> </div>
              <div style={totLineCont}> <div style={totalTex}><strong>Taxes:</strong></div>     <div style={totalNum}>{this.state.tax}</div> </div>
              <hr/>
              <div style={totLineCont}> <div style={totalTex}><strong>Total:</strong></div>     <div style={totalNum}>{this.state.total}</div> </div>
            </div>

          </div>

        </div>




        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

                <div >
                  <h2>----- Cash Sale Intructions -----</h2>

                  {
                    (this.state.total > this.state.mninput) ? <div>
                    <h2>Cash from customer is less than Total</h2>
                      <div><button style={customStyles.button} onClick={ ()=>{
                          this.closeModal()
                        } }>Close and fix Cash Input</button></div>
                    </div> :
                    <div>
                      <div style={customStyles.linec}><strong style={customStyles.linec.strong1}>Cash From Customer: </strong><div style={customStyles.linec.number}>{(parseFloat(this.state.mninput)).toFixed(2)}</div></div>
                      <br/>
                      <div style={customStyles.linec}><strong style={customStyles.linec.strong1}>Total Sale: </strong><div style={customStyles.linec.number}>{this.state.total}</div></div>
                      <br/>
                      <hr/>
                      <div style={customStyles.linec}><strong style={customStyles.linec.strong1}>Cash Back to customer: </strong><div style={customStyles.linec.number}>{this.state.cash}</div></div>
                      <br/>
                      <br/>
                      <div><button style={customStyles.button} onClick={ ()=>{
                          this.pr2()
                          this.closeModal()
                          this.setState({ subtotal: 0, tax: 0 , total: 0, skinput: "", mninput: "", sale: [], cash: 0 })
                        } }>Print Receipt</button></div>
                    </div>
                  }
                </div>

            </Modal>
          </div>



          <div>
            <Modal
              isOpen={this.state.modal2IsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal2}
              style={customStyles2}
              contentLabel="Example Modal"
            >

                  <div >
                    <h2>----- Credic Card Charge Result -----</h2>
                    <div style={customStyles2.linec}><strong style={customStyles2.linec.strong1}>{
                        (this.state.sale[0] === undefined) ? <div>No Items in card tobe Charged.</div> : <div>Suceesfully Charged Customer's Card.</div>
                      }</strong></div>
                    <br/>
                    <br/>
                    <div><button style={customStyles2.button} onClick={ ()=>{
                        this.pr2()
                        this.closeModal2()
                        this.setState({ subtotal: 0, tax: 0 , total: 0, skinput: "", mninput: "", sale: [], cash: 0 })
                      } }>Print Customer Receipt</button></div>
                  </div>

              </Modal>
            </div>

      </div>
    )
  }
}


const QUERY = gql`
  query {
    allProducts{ id active category name price skbc stock }
  }
`

export default graphql(QUERY)(ProductPOS)




// <Fullscreen
//   enabled={this.state.isFullscreenEnabled}
//   onChange={isFullscreenEnabled => this.setState({isFullscreenEnabled})}
// >
// <div style={ MainCont }>
//
// </div>
// </Fullscreen>

// this.setState({ isFullscreenEnabled: false })
//
//
// componentDidMount(){
//   console.log("going Full Screen")
//   this.setState({ isFullscreenEnabled: true })
// }
