import React from 'react';
import {Table} from "react-bootstrap"
class CL extends React.Component {
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
        return(
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
        )
    }
}

export default CL;
