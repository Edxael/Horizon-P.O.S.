import React, { Component } from 'react'
import VisMenu from './00-1-Pro-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createProduct(
              $active: Boolean!,
              $name: String!,
              $price: Float!,
              $units: Int!
            )
  {
    createProduct( active: $active, name: $name, price: $price, units: $units) {
       active
       name
       price
       units
    }
  }
`


class AddNewProduct extends Component {
  constructor(props){
    super(props)
    this.state = { name: "", price:"", units:"", active: "" }
  }

  exe1 = ()=>{
  console.log("Add Game executed")

  this.props.mutate({
          variables: {
                        name: this.state.name ,
                        price: parseFloat(this.state.price, 0),
                        units: parseInt(this.state.units, 0),
                        active: (this.state.active === "true" ? true : false)
                     }
  })
  this.setState({ name: "", price:"", units:"", active:"" })
}

  render(){
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>
        <div>Add Product 1</div>
          <div style={mySty}>
            <form>
              <div> <label style={labelSty}>Name:  </label> <input style={inputSty} type="text" placeholder="Name..." value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
              <div> <label style={labelSty}>Price:  </label> <input style={inputSty} type="text" placeholder="Price..." value={this.state.price} onChange={ (event) => { this.setState({ price: event.target.value }) } } /></div>
              <div> <label style={labelSty}>Units:  </label> <input style={inputSty} type="text" placeholder="Units..." value={this.state.units} onChange={ (event) => { this.setState({ units: event.target.value }) } } /></div>
              <div> <label style={labelSty}>Active:  </label> <input style={inputSty} type="text" placeholder="Active..." value={this.state.active} onChange={ (event) => { this.setState({ active: event.target.value }) } } /></div>

            </form>

            <br/>

            <button style={btnSty} onClick={()=>{this.exe1()}} >Add Product</button>
          </div>
      </div>
    )
  }
}

export default graphql(MUTATION)(AddNewProduct)
