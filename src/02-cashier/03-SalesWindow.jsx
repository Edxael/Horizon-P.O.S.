import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TemplateSaleLine from './99-Sale-Line-Item.jsx'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'



class ProductPOS extends Component {
  constructor(props){
    super(props)
    this.state = { query: "", redirect: false, skinput: "", mninput: "", sale: [], notfound: false, subtotal: 0, tax: 0 , total: 0 }
  }

// ------------------------------------------------------------------------------------------------------------------------------

  redirectToDashBoard = ()=>{
    console.log("inside of redirectToDashBoard");
    this.setState({ redirect: true })
  }


// ------------------------------------------------------------------------------------------------------------------------------


  scanerAddProduct = () => {
    console.clear()
    console.log("Hello from scaner")
    // this.setState({ skinput: })

    console.log(this.state.skinput);



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
    console.log("Inside the addProduct Function")
    console.log( "All the products in Local Storage: ", MyLocStorage.get('lm_allProducts') )
    console.log("Product skbc to add: ", this.state.mninput )

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


  cancelSale = ()=>{
    this.setState({ subtotal: 0, tax: 0 , total: 0, skinput: "", mninput: "", sale: [], })
    console.clear()
  }

// ------------------------------------------------------------------------------------------------------------------------------


  render(){
    const { allProducts } = this.props.data
    // console.log("New AllP", allProducts)
    MyLocStorage.add('lm_allProducts', allProducts )
    // MyLocStorage.add('', allProducts )


    // General Style
    const POSCont = { display: "flex", height: "80vh" }


    // LEFT STYLE
    const LeftCont = { width: "70%", border: "2px solid black", marginRight: "5px", padding: "15px", backgroundColor: "rgba(254, 254, 254, 0.5)" }
      const sknInp = { height: "35px", width: "80%", marginBottom: "5px", paddingLeft: "8px" }
      const manInp = { height: "35px", width: "80%", paddingLeft: "8px" }
      const pnfSty = { backgroundColor: "red", width: "80%", height: "35px", textAlign: "center", fontSize: "30px", marginLeft: "10%" }
      const keypadCont = {  }
        const roll = { marginBottom: "5px" }
          const kbtn = { height: "50px", width: "150px" }


    // RIGHT STYLE
    const RighCont = { width: "30%", border: "2px solid black", padding: "10px", backgroundColor: "rgba(254, 254, 254, 0.5)" }
      const ItemsCont = { backgroundColor: "rgb(251, 255, 175)", padding: "7px", border: "1px solid black", height: "80%" }
      const totalsCont = { backgroundColor: "rgb(175, 228, 255)", padding: "7px", border: "1px solid black", height: "13%", marginTop: "10px" }

        const totLineCont = { display: "flex", justifyContent: "space-between" }
          const totalNum = { textAlign: "right" }
          const totalTex = { textAlign: "right" }

    // <input style={sknInp} type="text" onChange={ ()=>{ this.scanerAddProduct() } }/><br/>

    return(
      <div>
        <div>HORIZON P.O.S. -  SALES WINDOW</div>
        <hr/>

        <div style={POSCont}>

          <div style={LeftCont}>
            <hr/>
            <br/>


            { this.state.notfound ? <div style={pnfSty}>CODE Not Found :(</div> :
                <input style={sknInp} type="text" value={this.state.skinput} onChange={
                    (eve)=>{
                        this.setState( { skinput: eve.target.value })
                        console.log("skinput: ", this.state.skinput.length )
                        if(this.state.skinput.length === 7){
                          this.scanerAddProduct()
                        }

                    }
                  } />
            }

            <br/>

            { this.state.notfound ? <div style={pnfSty}>CODE Not Found :(</div> :
                <input style={manInp} type="text" value={this.state.mninput} onChange={(eve)=>{this.setState( { mninput: eve.target.value })}} />
            }

            <br/><br/>
            <hr/><br/>

            <div  style={keypadCont}>
              <div style={roll}>
                <button style={kbtn} onClick={ ()=>{ this.addProduct() } }>Add Item</button> <button style={kbtn}>Delete Items</button > <button style={kbtn} onClick={ ()=>{ this.cancelSale() } } >Cancel</button>
              </div>
              <div style={roll}>
                <button style={kbtn}>Cash</button> <button style={kbtn}>Card</button> <button style={kbtn}>Test P.</button>
              </div>
            </div>

            <h3>To add items use keypad.</h3>
            <hr/>
            { this.state.redirect ? <Redirect push to="/C1" /> : <button style={kbtn} onClick={this.redirectToDashBoard} >Dash-Board</button> }

          </div>

          <div style={RighCont}>

            <div style={ItemsCont}>
                {
                  this.state.sale[0] === undefined ? <div>No Items Yet </div> :
                  this.state.sale.map((product)=>{ return <TemplateSaleLine key={product.id} name={product.name} price={product.price} /> })
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



      </div>
    )
  }
}


const QUERY = gql`
  query {
    allProducts{
      id
      active
      category
      name
      price
      skbc
      stock
    }
  }
`

export default graphql(QUERY)(ProductPOS)
