import React from 'react';
import Background from '../assets/background.jpg'
import { Card,Button } from "react-bootstrap"

import axios from 'axios';


class Login extends React.Component{
    
      constructor(props) {
        super(props);
        this.state = {
                    username : "",
                    password: "",
                    check: false,
                    loading : false
                  };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        
        this.handleSubmit=this.handleSubmit.bind(this)
      }


      handleUsername(event) {
        this.setState({username: event.target.value});
      }
      handlePassword(event) {
        this.setState({password: event.target.value});
      }
      
      handleSubmit (evt) {
        evt.preventDefault();
        const payload = {
                    username : this.state.username,
                    password : this.state.password,
        }
        this.setState({loading:true})
        axios({
            method: "POST",
            url: "https://digimastertool.herokuapp.com/validate",
            data: payload, 
        }).then(function(response) {
            
            this.props.handleLogin(true);
            localStorage.setItem('loginVal', 'Done');
            sessionStorage.setItem('loginVal', 'Done');
           
        }.bind(this)).catch(
            function(error) {
                
                alert("Invalid Username and Password")
                this.setState({loading:false})
                this.props.handleLogin(false);
            }.bind(this)
        );
    }
   
        
    
    render(){
        
        
    const sectionStyle = {
      width: "100%",
      height:"825px",
      marginTop:"0px",
      backgroundImage : "url(" + Background +")",
      backgroundPosition: 'center',
      backgroundSize: 'auto',
      display: "flex",
      justifyContent: "center",
      alignItems: "center" 
    };
    const cardStyle={
      background:'white',
      height: '40%',
      width:'40%',
      minHeight : "340px",
      minWidth : '350px'
      
    }
    const cardTitleStyle={
      fontSize:30,
      fontWeight: 'bold',
      color:'#0f1d21',
      backgroundColor:'#4b6e73',
      paddingTop:8,
      paddingBottom:8,
      justifyContent:'center',
      display:'flex'
    }
    const cardSubtitleStyle={
      fontSize:22,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingTop: 20
    }

    

    return(
      <div>
        {this.state.loading ? <div className="loader center">
      <i className="fa fa-cog fa-spin" />
    </div> : <div>
    <div style={sectionStyle}>
            <Card style={cardStyle}>
            <Card.Body>
              <Card.Title style={cardTitleStyle}> DigiTool </Card.Title>
              <Card.Subtitle style={cardSubtitleStyle}> Sign In </Card.Subtitle>
              
              <input style={{ height:35,width:'70%',marginLeft:60,marginTop:40,fontSize:17}} type="text" name="title" placeholder="Username" 
              value={this.state.username}
              onChange={this.handleUsername}
              />
              <input style={{ height:35,width:'70%',marginLeft:60,marginTop:20,fontSize:17}} type="text" name="password" placeholder="Password"  
              value={this.state.password}
              onChange={this.handlePassword}
              />
              <div style ={{marginTop:30,marginLeft:'70%'}}>
              <Button style={{color:'#0f1d21',backgroundColor:'#4b6e73',height:40,width:100,fontSize:17}} onClick={this.handleSubmit}>Sign In</Button>
              </div>
              
              </Card.Body>
            </Card>
      </div></div>}

      </div>
      

    
    )
    }
}

export default Login;