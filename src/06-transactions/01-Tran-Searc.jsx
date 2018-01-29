import React, { Component } from 'react'
import TranMenu from './00-1-Tran-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

export default class extends Component {
  render(){
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <TranMenu/>
        <div>Transaction Search</div>
        <div>Here is the place where the reports will be render.</div>
      </div>
    )
  }
}
