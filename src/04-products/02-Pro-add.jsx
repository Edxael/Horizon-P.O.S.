import React, { Component } from 'react'
import VisMenu from './00-1-Pro-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = { name: "", price:"", units:"", active: "" }
  }

  exe1 = ()=>{
  console.log("Add Game executed");
  console.log(this.state);

  this.props.mutate({
          variables: {
                        name: this.state.name ,
                        units: parseFloat(this.state.price, 0),
                        units: parseInt(this.state.units, 0),
                        active: this.state.active
                     }
  })
  this.setState({ name: "", price:"", units:"", active:"", stock:"" })
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
        <div>Add Product</div>
          <div style={mySty}>
            <form>
              <div> <label style={labelSty}>Name:  </label> <input style={inputSty} type="text" placeholder="Name..." value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
              <div> <label style={labelSty}>Price:  </label> <input style={inputSty} type="text" placeholder="Price..." value={this.state.price} onChange={ (event) => { this.setState({ price: event.target.value }) } } /></div>
              <div> <label style={labelSty}>Units:  </label> <input style={inputSty} type="text" placeholder="Units..." value={this.state.units} onChange={ (event) => { this.setState({ units: event.target.value }) } } /></div>
              <div> <label style={labelSty}>Active:  </label> <input style={inputSty} type="number" placeholder="Active..." value={this.state.active} onChange={ (event) => { this.setState({ active: event.target.value }) } } /></div>

            </form>

            <br/>

            <button style={btnSty} onClick={()=>{}} >Add Game</button>
          </div>
      </div>
    )
  }
}
