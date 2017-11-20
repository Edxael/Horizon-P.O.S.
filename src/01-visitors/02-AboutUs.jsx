import React, { Component } from 'react'
import VisMenu from './00-1-Vis-Menu.jsx'
import Logo1 from '../00-gralComps/01-LogoComp.jsx'
import imgER from '../00-gralComps/img/me1.png'

export default class extends Component {
  render(){
    const ConCon = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "100%", margin: "0px auto", padding: "15px" }
    const autors = { display: "flex", justifyContent: "center" }
    const profile = { margin: "0px 10px" }
    const picSty = { width: "213px", height: "213px", border: "4px solid white" }
    const listStyle = { textAlign: "left", width: "25%", marginLeft: "36%" }
    return(
      <div>

        <div>
          <Logo1/>
        </div>

        <VisMenu/>

        <div style={ConCon}>
          <h1> About Us </h1>
          <hr/>
          <p>This site was developed by:</p>

          <div>
            <div style={autors}>

              <div style={profile}>
                <div>
                  <div>
                    <img style={picSty} src={imgER} alt="Missing "/>
                  </div>
                </div>
                <div>
                  <br/>
                  <div><strong>Name: </strong>Edmundo Rubio</div>
                  <div><strong>GitHub: </strong><a href="https://github.com/Edxael" target="_blank" rel="noreferrer noopener">Edxael</a></div>
                  <div><strong>Linkedin: </strong><a href="https://www.linkedin.com/in/edmundo-rubio-3252a425/" target="_blank" rel="noreferrer noopener">E. Rubio</a></div>
                </div>
              </div>



            </div>
          </div>

          <hr/>

        <h3>This site was create using:</h3>

        <div style={listStyle}>
          <ol>
            <li>React.js</li>
            <li>Apollo Client</li>
            <li>GraphQL / Graph.cool</li>
          </ol>
        </div>

        </div>

      </div>
    )
  }
}

// <div style={profile}>
//   <div>
//     <div>
//       <img style={picSty} src={imgCJ} alt="Missing Picture"/>
//     </div>
//   </div>
//   <div>
//     <br/>
//     <div><strong>Name: </strong>Curtins Jackson</div>
//     <div><strong>GitHub: </strong><a href="https://github.com/Curtis50Jackson87" target="_blank">Curtis50Jackson87</a></div>
//     <div><strong>Linkedin: </strong><a href="https://www.linkedin.com/in/curtis-jackson-670686143/" target="_blank">C. Jackson</a></div>
//   </div>
// </div>
