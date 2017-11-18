import React, { Component } from 'react'
import VisMenu from './00-1-Cash-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = { id: "", name: "", genre:"", picture:"", year: "", price:"", stock:"", description:"" }
  }

  render(){
    // const btn1 = { margin: "0px auto", display:"block" }
    // const contSty = { display: "flex" }
    const Rcont = { padding: "0px 15px" }
    // const ConPill = { display: "flex", justifyContent: "center" }
    // const UInfo = { paddingLeft: "15px" }
    // const title2 = { textAlign: "center" }
    const labelSty = { textAlign: "left" }
    const inputSty = { width: "100%" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px", display: "flex" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>
        <hr/>
        <br/>

        <div style={pageSty}>
          <div >
            <br/>
            <br/>
            <VisMenu/>
          </div>
          <div style={Rcont}>

            <div>Update Profile</div>

            <form>
                <div> <label style={labelSty}>DB-ID:  </label> <input style={inputSty} type="text" placeholder="DataBase ID..." value={this.state.id} onChange={ (event) => { this.setState({ id: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Name:  </label> <input style={inputSty} type="text" placeholder="Name..." value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Genre:  </label> <input style={inputSty} type="text" placeholder="genre..." value={this.state.genre} onChange={ (event) => { this.setState({ genre: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Picture:  </label> <input style={inputSty} type="text" placeholder="picture..." value={this.state.picture} onChange={ (event) => { this.setState({ picture: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Year:  </label> <input style={inputSty} type="number" placeholder="year..." value={this.state.year} onChange={ (event) => { this.setState({ year: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Price:  </label> <input style={inputSty} type="number" placeholder="price..." value={this.state.price} onChange={ (event) => { this.setState({ price: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Stock:  </label> <input style={inputSty} type="number" placeholder="stock..." value={this.state.stock} onChange={ (event) => { this.setState({ stock: event.target.value }) } } /></div>
                <div> <label style={labelSty}>Description:  </label> <input style={inputSty} type="text" placeholder="description..." value={this.state.description} onChange={ (event) => { this.setState({ description: event.target.value }) } } /></div>
            </form>

            <br/>

            <button style={btnSty} onClick={()=>{ }} >Update Game</button>


          </div>
        </div>

      </div>
    )
  }
}
