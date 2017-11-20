import React, { Component } from 'react'
import VisMenu from './00-1-Pro-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Template from '../00-gralComps/03-Product-Template.jsx'
import * as MyLocStorage from '../00-gralComps/locStorage/locStorageFunctions.js'

class ProductSearch extends Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  render(){
    const { loading, allProducts } = this.props.data
    console.log("All Prod: ", allProducts)
    MyLocStorage.add('lm_allProducts', allProducts )

    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "50%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

          <div style={pageSty}>
            <h2>Search Products DataBase</h2>
              <p><strong>To find a product type one of the following:</strong>Name, Price, Category, Active Status, Code.</p>

              <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
                onChange={ (event) => { this.setState({ query: event.target.value }) } } />

              {
                !loading && allProducts
                .filter((product)=>{ return ( (`${product.name} ${product.price} ${product.category} ${product.skbc} ${product.active}`).toLowerCase().includes(this.state.query.toLowerCase()) ) })
                .map((product)=>{ return( <Template key={product.id} id={product.id} name={product.name}
                      active={product.active} price={product.price} stock={product.stock} /> ) })
              }

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

export default graphql(QUERY)(ProductSearch)
