import React from 'react';
import Login from './screens/login'
import Home from './screens/home'
import Nav from './Nav'
import Aid from './screens/aid'
import CL from './screens/cl'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                login : false,
                activeTab : 'home',
                listData : [],
                CustomerData:[]
              };
  }

  handleLogin=(val)=>{
    
    this.setState({login:val})
  }
  handleActiveTab = (val) =>{
    this.setState({activeTab:val})

  }

  updatelistData = () =>{
    axios({
      method: "GET",
      url: "https://digimastertool.herokuapp.com/data",
     
  }).then(function(response) {

     let l = []
     for (var i=0; i < (response.data).length ; i++){
         l.push(JSON.parse(response.data[i]))
     }
     this.setState({listData:l})
      
     
  }.bind(this)).catch(
      function(error) {
          
          alert("Invalid Data Format")
          
      }.bind(this)
  );
  }

  updateCustomerData = () =>{
    axios({
      method: "GET",
      url: "https://digimastertool.herokuapp.com/customerList",
     
  }).then(function(response) {

     let l = []
     for (var i=0; i < (response.data).length ; i++){
         l.push(JSON.parse(response.data[i]))
     }
     this.setState({CustomerData:l})
      
     
  }.bind(this)).catch(
      function(error) {
          
          alert("Invalid Customer Data Format")
          
      }.bind(this)
  );
  }
  
  render(){
  
    return(
      <div>
      {(this.state.login || sessionStorage.getItem('loginVal') == "Done") ? 
      <div>
        <Nav handleActiveTab={this.handleActiveTab}></Nav> 
      {this.state.activeTab=='home'? 
      <Home></Home> : (this.state.activeTab=='aid'? 
      <Aid updatelistData = {this.updatelistData} listData = {this.state.listData}></Aid> : 
      <CL updateCustomerData = {this.updateCustomerData} CustomerData = {this.state.CustomerData}></CL>)}

      </div>

      :  <Login handleLogin={this.handleLogin}></Login>}
      </div>
      
    )
  }
}

export default App;
