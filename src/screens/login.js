import React from 'react';
import Background from '../assets/background.jpg'
import { Card,Button } from "react-bootstrap"
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component{
    
      constructor(props) {
        super(props);
        this.state = {
                    username : "",
                    password: "",
                    check: false
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
        console.log("SignIn");
        const payload = {
                    username : this.state.username,
                    password : this.state.password,
        }
        axios({
            method: "POST",
            url: "https://digitool.azurewebsites.net/validate",
            data: payload, 
        }).then(function(response) {
            this.setState({check:true})
            this.routingFunction();
        }.bind(this)).catch(
            function(error) {
                this.setState({check:false})
                alert("Invalid Username and Password")
            }.bind(this)
        );
    }
   
        routingFunction = () => {
            this.props.history.push({
                pathname: `/home`,
            });
            }
    
    render(){
        
        
    const sectionStyle = {
      width: "100%",
      height:"850px",
      marginTop:"0px",
      backgroundImage : "url(" + Background +")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      
    };
    const cardStyle={
      background:'white',
      height: 350,
      width:500,
      
    }
    const cardTitleStyle={
      paddingLeft:'37%',
      fontSize:30,
      fontWeight: 'bold',
      color:'#0f1d21',
      backgroundColor:'#4b6e73',
      paddingTop:8,
      paddingBottom:8,
    }
    const cardSubtitleStyle={
      fontSize:22,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingTop: 20
    }

    

    return(
      <div style={sectionStyle}>
            <Card style={cardStyle}>
            <Card.Body>
              <Card.Title style={cardTitleStyle}> DigiTool </Card.Title>
              <Card.Subtitle style={cardSubtitleStyle}> Sign In </Card.Subtitle>
              
              <input style={{ height:35,width:340,marginLeft:60,marginTop:40,fontSize:17}} type="text" name="title" placeholder="Username" 
              value={this.state.username}
              onChange={this.handleUsername}
              />
              <input style={{ height:35,width:340,marginLeft:60,marginTop:20,fontSize:17}} type="text" name="password" placeholder="Password"  
              value={this.state.password}
              onChange={this.handlePassword}
              />
              <div style ={{marginTop:40,marginLeft:360}}>
              <Button style={{color:'#0f1d21',backgroundColor:'#4b6e73',height:40,width:100,fontSize:17}} onClick={this.handleSubmit}>Sign In</Button>
              </div>
              
              </Card.Body>
            </Card>
      
      
      </div>
    )
    }
}

export default withRouter(Login);