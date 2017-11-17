import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class IndexComp extends Component {
  render() {
    return(
      <div>
        <div>Hello from IndexComp</div>
      </div>
    )
  }
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))
