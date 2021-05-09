import React from 'react';
import './App.css'

import { MenuItem } from '@material-ui/core';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    clickedTab :'home'
                  };
                }
    render(){
        const linkStyle={
            fontSize:18,
            color: "#82bcc4",
        }
        const clickedLinkStyle={
            fontSize:18,
            backgroundColor: "#82bcc4 ",
            color:"#0f1d21",
            borderRadius:'20px'
        }
        return(
            <nav>
                {/* <div style={{marginLeft:'20px',fontSize:28,fontWeight:700}}>DigiTool</div> */}
                <ul className="nav-links">
                    
                <div to="/home" style={{ textDecoration: 'none' }}>
                    <MenuItem style={this.state.clickedTab==='home' ? clickedLinkStyle : linkStyle } onClick={() =>{this.setState({clickedTab:'home'});this.props.handleActiveTab("home");}}>Home</MenuItem>
                    </div>
                    <div to="/aid" style={{ textDecoration: 'none' }}>
                    <MenuItem style={this.state.clickedTab==='aid'  ? clickedLinkStyle : linkStyle} onClick={() =>{this.setState({clickedTab:'aid'});this.props.handleActiveTab("aid");}}>Aid</MenuItem>
                    </div>
                    <div to="/cl" style={{ textDecoration: 'none' }}>
                    <MenuItem style={this.state.clickedTab==='cl'  ? clickedLinkStyle : linkStyle} onClick={() =>{this.setState({clickedTab:'cl'});this.props.handleActiveTab("cl");}}>CL</MenuItem>
                    </div>
                    
                </ul>
            </nav>
        )
    
}
}

export default Nav;
