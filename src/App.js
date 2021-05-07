import React from 'react';
import Login from './screens/login'
import Home from './screens/home'
import Nav from './Nav'
import Aid from './screens/aid'
import CL from './screens/cl'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                login : false,
                activeTab : 'home'
              };
  }

  handleLogin=(val)=>{
    
    this.setState({login:val})
  }
  handleActiveTab = (val) =>{
    this.setState({activeTab:val})

  }

  
  render(){
    console.log(localStorage.getItem('loginVal'))
    return(
      <div>
      {this.state.login ? 
      <div>
        <Nav handleActiveTab={this.handleActiveTab}></Nav> 
      {this.state.activeTab=='home'? <Home></Home> : (this.state.activeTab=='aid'? <Aid></Aid> : <CL></CL>)}

      </div>
      
      
      
      :  <Login handleLogin={this.handleLogin}></Login>}
      </div>
      
    )
  }
}

export default App;
