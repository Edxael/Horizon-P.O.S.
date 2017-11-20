import React, { Component } from 'react'
import VisMenu from './00-1-Pro-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation deleteProduct(
              $id: ID!
            )
  {
    deleteProduct( id: $id ) {
      id
    }
  }
`

class DeleteProduct extends Component {
  constructor(props){
    super(props)
    this.state = { id: "" }
  }

  exe1 = ()=>{
    console.log("delete Product executed");

    this.props.mutate({  variables: { id:this.state.id }  })
    this.setState({ id: "" })
  }

  render(){
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

        <div style={pageSty}>
          <h2>Delete Product Record</h2>
          <p>To DELETE a Product Record from the DataBase provide the Employee ID then click button <strong>Delete Record</strong></p>

            <div style={mySty}>
              <form>
                <div><label style={labelSty}>PRODUCT ID:  </label> <input style={inputSty} type="text" placeholder="Product ID..." value={this.state.id} onChange={ (event) => { this.setState({ id: event.target.value }) } } /></div>
              </form>
              <br/>
              <button style={btnSty} onClick={()=>{this.exe1()}} >Delete Record</button>
            </div>
        </div>

      </div>
    )
  }
}


export default graphql(MUTATION)(DeleteProduct)
