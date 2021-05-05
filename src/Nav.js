import React from 'react';
import './App.css'
import {Link} from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    clickhome:false,
                    clickaid:false,
                    clickcl:false
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
            color:"#0f1d21"
        }
        return(
            <nav>
                <ul className="nav-links">
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <MenuItem style={this.state.clickhome ? clickedLinkStyle : linkStyle } onClick={() =>{this.setState({clickhome:true,clickaid:false , clickcl:false})}}>Home</MenuItem>
                    </Link>
                    <Link to="/aid" style={{ textDecoration: 'none' }}>
                    <MenuItem style={this.state.clickaid ? clickedLinkStyle : linkStyle} onClick={() =>{this.setState({clickhome:false,clickaid:true , clickcl:false})}}>Aid</MenuItem>
                    </Link>
                    <Link to="/cl" style={{ textDecoration: 'none' }}>
                    <MenuItem style={this.state.clickcl ? clickedLinkStyle : linkStyle} onClick={() =>{this.setState({clickhome:false,clickaid:false , clickcl:true})}}>CL</MenuItem>
                    </Link>
                    
                </ul>
            </nav>
        )
    
}
}

export default Nav;
