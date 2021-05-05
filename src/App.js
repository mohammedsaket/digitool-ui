import React from 'react';
import Login from './screens/login'
import Home from './screens/home'
import Nav from './Nav'
import Aid from './screens/aid'
import CL from './screens/cl'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
class App extends React.Component {
  
  render(){
    
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route component={DefaultContainer}/>
        </Switch>
      </Router>
      
    )
  }
}
const DefaultContainer = () => (
      <div>
        <Nav />
        <Route path ='/home' component ={Home}></Route>
        <Route path ='/aid' component ={Aid}></Route>
        <Route path ='/cl' component ={CL}></Route>
      </div>
  

)

export default App;
