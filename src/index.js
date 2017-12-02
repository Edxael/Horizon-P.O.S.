import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { client } from './09-gcool/EndPoint.jsx'


import Home from './01-visitors/01-Home.jsx'
import Vis_About from './01-visitors/02-AboutUs.jsx'
import Vis_Cx from './01-visitors/03-ContacUs.jsx'
import Vis_Join from './01-visitors/04-JoinUs.jsx'
import Vis_Log from './01-visitors/05-LogIn.jsx'

import C_Dash from './02-cashier/01-Dash.jsx'
import C_PUpdate from './02-cashier/02-ProfUpdate.jsx'
import C_SalesWindow from './02-cashier/03-SalesWindow.jsx'

import Mngr from './03-manager/01-Mg.jsx'

import P_Search from './04-products/01-Pro-search.jsx'
import P_Add from './04-products/02-Pro-add.jsx'
import P_Update from './04-products/03-Pro-update.jsx'
import P_Delete from './04-products/04-Pro-delete.jsx'
import P_Invent from './04-products/05-Pro-tot-inv.jsx'
import P_UniPage from './04-products/99-Pro-Unipage.jsx'

import Per_sea from './05-persons/01-Per-Search.jsx'
import Per_add from './05-persons/02-Pers-Add.jsx'
import Per_upd from './05-persons/03-Per-Update.jsx'
import Per_del from './05-persons/04-Per-Delete.jsx'
import Per_uni from './05-persons/99-Per-UniPage.jsx'

import T_sea from './06-transactions/01-Tran-Searc.jsx'
import T_add from './06-transactions/02-Tran-Add.jsx'
import T_upd from './06-transactions/03-Tran-Update.jsx'
import T_del from './06-transactions/04-Tran-Delete.jsx'
import T_pnl from './06-transactions/05-Tran-PnL.jsx'
import T_uni from './06-transactions/99-Tran-UniPage.jsx'

import Time_sea from './07-Time/01-Time-Search.jsx'
import Time_add from './07-Time/02-Time-Add.jsx'
import Time_del from './07-Time/03-Time-Delete.jsx'
import Time_uni from './07-Time/99-Time-Unipage.jsx'


class IndexComp extends Component {
  render() {
    const idxComp = { textAlign: "center", backgroundColor: "gray", margin: "0px 10%" }
    return(
      <div style={idxComp}>
        <br/>
        <ApolloProvider client={client} >
          <Router>
            <div>


              <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/v2" component={Vis_About}/>
                <Route path="/v3" component={Vis_Cx}/>
                <Route path="/v4" component={Vis_Join}/>
                <Route path="/v5" component={Vis_Log}/>

                <Route path="/C1" component={C_Dash}/>
                <Route path="/C2" component={C_PUpdate}/>
                <Route path="/C3" component={C_SalesWindow}/>

                <Route path="/M1" component={Mngr}/>

                <Route path="/P1" component={P_Search}/>
                <Route path="/P2" component={P_Add}/>
                <Route path="/P3" component={P_Update}/>
                <Route path="/P4" component={P_Delete}/>
                <Route path="/P5" component={P_Invent}/>
                <Route path="/pro/:id" component={P_UniPage}/>

                <Route path="/Pe1" component={Per_sea}/>
                <Route path="/Pe2" component={Per_add}/>
                <Route path="/Pe3" component={Per_upd}/>
                <Route path="/Pe4" component={Per_del}/>
                <Route path="/per/:id" component={Per_uni}/>

                <Route path="/Time1" component={Time_sea}/>
                <Route path="/Time2" component={Time_add}/>
                <Route path="/Time3" component={Time_del}/>
                <Route path="/time/:id" component={Time_uni}/>

                <Route path="/T1" component={T_sea}/>
                <Route path="/T2" component={T_add}/>
                <Route path="/T3" component={T_upd}/>
                <Route path="/T4" component={T_del}/>
                <Route path="/T5" component={T_pnl}/>
                <Route path="/T6" component={T_uni}/>

              </Switch>

              <br/>
              <hr/>
              <p>By: Edmundo Rubio</p>
            </div>
          </Router>
        </ApolloProvider>
        <br/>
      </div>
    )
  }
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))
