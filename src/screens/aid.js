import React from 'react';
import {Button,Table} from "react-bootstrap"
class Aid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    search : "",
                  };
        this.handleSearch = this.handleSearch.bind(this);
      }
      handleSearch(event) {
        this.setState({search: event.target.value});
      }
      

    render(){
        const data = [
            {
                sn:1,
                name:'saket',
                pass:'saket123',
                user:'sakej'
            },
            {
                sn:2,
                name:'saket',
                pass:'saket123',
                user:''
            },
            {
                sn:3,
                name:'saket',
                pass:'saket123',
                user:'sakej'
            }
        ]
        const buttonStyle={
            marginLeft:20,
            color: '#93d2db',
            backgroundColor:'#3a5559',
            height:35,
            width:100,
            fontSize:17,
            borderRadius:5,
            fontWeight: 'bold'
        }
        return(
            <div >
                <div style={{height:'70px',backgroundColor:'#cae2e6'}}>
                <input style={{ height:35,width:340,marginLeft:30,marginTop:'17px',marginRight:10,fontSize:17}} type="text" name="title" placeholder="Search" 
              value={this.state.search}
              onChange={this.handleSearch}
              />
                 <Button 
                 style={buttonStyle} 
                 onClick={this.handleSubmit}>Search
                 </Button>
                 
                 <label style={{marginLeft:200,fontWeight: 'bold'}}>
                     Export
                 <Button style={buttonStyle}>Copy</Button>
                 <Button style={buttonStyle}>Excel</Button>
                 <Button style={buttonStyle}>Pdf</Button>
                 </label>
                 <label style={{marginLeft:30,fontWeight: 'bold'}}>
                 Show
                 <select style={{marginLeft:10,marginRight:10,height:35,width:50,fontSize:13}}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="ALL">ALL</option>
                    </select>
                    entries
                 </label>
                 <Button style={buttonStyle}>Add Site</Button>
                </div>
                <div style={{height:'70px',backgroundColor:'blue'}}>
                </div>
                <div>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody style = {{justifyContent:'center',alignSelf:'center'}}>
                {
                    data.map((data_list)=>
                    <tr>
                        <td style = {{justifyContent:'center',alignSelf:'center'}}>{data_list.sn}</td>
                        <td>{data_list.name}</td>
                        <td>{data_list.pass}</td>
                        <td>{data_list.user}</td>
                    </tr>
                    )
                }
                </tbody>
                </Table>
                </div>
                
            </div>
        )
    }
}

export default Aid;
