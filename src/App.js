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
                activeTab : sessionStorage.getItem('activeTab') ? sessionStorage.getItem('activeTab')  : 'home',
                listData : [],
                CustomerData:[],
                chartData : []
              };
  }

  componentDidMount(){
    this.getWebsiteData();
    this.updatelistData();
    this.updateCustomerData();
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

  getWebsiteData = () =>{
    axios({
      method: "GET",
      url: "https://digimastertool.herokuapp.com/WebsiteData",
     
  }).then(function(response) {
     this.setState({chartData:response.data})
      
     
  }.bind(this)).catch(
      function(error) {
          
          alert("Invalid Website Data Format")
          
      }.bind(this)
  );
  }
  
  render(){
    console.log("Saket2",this.state)
    return(
      <div>
      {(this.state.login || sessionStorage.getItem('loginVal') == "Done") ? 
      <div>
        <Nav handleActiveTab={this.handleActiveTab}></Nav> 
      {this.state.activeTab=='home'? 
      <Home chartData = {this.state.chartData}></Home> : (this.state.activeTab=='aid'? 
      <Aid listData = {this.state.listData}></Aid> : 
      <CL CustomerData = {this.state.CustomerData}></CL>)}

      </div>

      :  <Login handleLogin={this.handleLogin}></Login>}
      </div>
      
    )
  }
}

export default App;
