import React, { Component } from 'react'
import VisMenu from './00-1-Pro-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation updateProduct(
    $id: ID!,
    $active: Boolean!,
    $category: String!,
    $name: String!,
    $price: Float!,
    $skbc: String!,
    $stock: Int!
  )
  {
    updateProduct( id: $id, active: $active, category: $category, name: $name, price: $price, skbc: $skbc, stock: $stock )
    {
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

class UpdateProduct extends Component {
  constructor(props){
    super(props)
    this.state = { show: false, updated: false, id: "", active: "", category: "", name: "", price: "", skbc: "", stock: "" }
  }

  exe1 = ()=>{
    console.log("Profile Updated.")
    this.props.mutate({
      variables: {
              id: this.state.id ,
              active: (this.state.active === "true" ? true : false) ,
              category: this.state.category ,
              name: this.state.name ,
              price: parseFloat(this.state.price, 0),
              skbc: this.state.skbc ,
              stock: parseInt(this.state.stock, 0)
            }
    })

    this.setState({ updated: true })
    setTimeout(()=>{ this.setState({ updated: false }) }, 4500)
  }


  componentDidMount(){
    let productsDb = MyLocStorage.get('lm_allProducts')
    const token = this.props.match.params.id
    let currentProduct = productsDb.filter((x)=>{ return x.id === token }).reduce((z)=>{return z})

    this.setState({
      name: currentProduct.name ,
      category: currentProduct.category ,
      price: currentProduct.price ,
      skbc: currentProduct.skbc ,
      stock: currentProduct.stock ,
      active: currentProduct.active ,
      id: currentProduct.id
    })

    this.setState({ show: true })
  }


  render(){
    const Infocont = { padding: "0px 15px", width: "100%", textAlign: "left" }
    const updated = { textAlign: "center", padding: "15px", backgroundColor: "rgb(149, 255, 112)" }
    const UInfo = { marginTop: "10px" }
    const title2 = { textAlign: "center" }
    const labelSty = { marginLeft: "10px" }
    const inputSty = { width: "100%", padding: "5px" }
    // const ppic = { border: "2px solid black", width: "231px", height: "325px" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px", backgroundColor: "rgb(249, 190, 162)" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

        <div>
          <h2>Product Profile</h2>




          { this.state.show ?

            <div>

              <div style={Infocont}>

                <form>
                    <div style={UInfo}> <label style={labelSty}>Product Name:  </label> <input style={inputSty} type="text" value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Price:  </label> <input style={inputSty} type="text" value={this.state.price} onChange={ (event) => { this.setState({ price: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Category:  </label> <input style={inputSty} type="text" value={this.state.category} onChange={ (event) => { this.setState({ category: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Active Status:  </label> <input style={inputSty} type="text" value={this.state.active} onChange={ (event) => { this.setState({ active: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>SKBC Code:  </label> <input style={inputSty} type="text" value={this.state.skbc} onChange={ (event) => { this.setState({ skbc: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Stock:  </label> <input style={inputSty} type="text" value={this.state.stock} onChange={ (event) => { this.setState({ stock: event.target.value }) } } /></div>
                </form>

                <br/>
                <div>
                  <div><strong>Product ID: </strong>{this.state.id}</div>
                </div>

                <br/>

                { this.state.updated ? <div style={updated}>Changes has been made, please Log Out and Log In to see changes</div> : <div style={title2}>Click Button to execute changes.</div> }
                <br/>

              </div>
            </div>


            : <div>Loading Product Data....</div>
          }

          <button style={btnSty} onClick={()=>{this.exe1()}} >Update Product</button>


        </div>

      </div>
    )
  }
}


export default graphql(MUTATION)(UpdateProduct)
