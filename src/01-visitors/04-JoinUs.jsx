import React, { Component } from 'react'
import VisMenu from './00-1-Vis-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'

export default class extends Component {
  render(){
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>
        <div>Join Us Component</div>
      </div>
    )
  }
}
