import React, { Component } from 'react'
import Menu from './00-Time-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createTimeRecord(
              $in: DateTime!,
              $out: DateTime!,
              $user: TimeRecorduserUser

              $name: String!,
              $price: Float!,
              $stock: Int!
              $skbc: String!,
              $category: String!
            )
  {
    createTimeRecord( in: $in, out: $out, user: $user ) {
       in
       out
       user
    }
  }
`


class AddNewProduct extends Component {
  constructor(props){
    super(props)
    this.state = { in: "", out:"", user:"", fullIn: "", fullOut: "" }
  }

  exe1 = ()=>{
  console.log("Add Game executed")

  this.props.mutate({
          variables: {
                        in: this.state.in ,
                        out: this.state.out,
                        user: this.state.user
                     }
  })
  this.setState({ in: "", out:"", user:"", date: "", fullIn: "", fullOut: "" })
}

exe2 = ()=>{
  // 2017-11-27T18:00:00.000Z
  // This is what I got from Graph.cool:  "2017-11-27T17:00:00.000Z"
  console.clear()
  console.log("Creating Time String")
  console.log("");

  console.log("Full-In: ")
  let fin = `${this.state.date}T${this.state.in}:00.000Z`

  console.log(fin)
  console.log(typeof fin);

  console.log(" ");

  console.log(this.state.date)
  console.log(typeof this.state.date)
  console.log("");

  console.log(this.state.in)
  console.log(typeof this.state.in)

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

        <Menu/>
        <div>Create a Time Record</div>
          <div style={mySty}>
            <form>
              <div> <label style={labelSty}>Date of Shift:  </label> <input style={inputSty} type="date" placeholder="Date..." value={this.state.date} onChange={ (event) => { this.setState({ date: event.target.value }) } } /></div>

              <div> <label style={labelSty}>Time Clock-In:  </label> <input style={inputSty} type="time" placeholder="Time of Clock-In..." value={this.state.in} onChange={ (event) => { this.setState({ in: event.target.value }) } } /></div>
              <div> <label style={labelSty}>Time Clock-Out:  </label> <input style={inputSty} type="time" placeholder="Time of Clock-Out..." value={this.state.out} onChange={ (event) => { this.setState({ out: event.target.value }) } } /></div>

              <div> <label style={labelSty}>Employee:  </label> <input style={inputSty} type="text" placeholder="Employee Name..." value={this.state.ename} onChange={ (event) => { this.setState({ ename: event.target.value }) } } /></div>
            </form>

            <br/>
            <button style={btnSty} onClick={()=>{this.exe2()}}>Create Time String</button>
            <button style={btnSty} onClick={()=>{this.exe1()}} >Add Time Record</button>
          </div>
      </div>
    )
  }
}

export default graphql(MUTATION)(AddNewProduct)
