import React from 'react';
import '../App.css'
import axios from 'axios';

class AddClientModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                    name : '',
                    email : '',
                    phone_number : '',
                    source : '',
                    added_by : ''
                  };
      }


      handleSubmit = ()=> {
        const payload = { 
                    "ID":this.props.data.length +1,
                    "Name":this.state.name,
                    "PhoneNumber":this.state.phone_number,
                    "Email":this.state.email,
                    "Source":this.state.source,
                    "AddedBy":this.state.added_by,
                    "Orders":[]
    }
    console.log("Saket",payload)
        axios({
            method: "POST",
            url: "https://digimastertool.herokuapp.com/postCustomerList",
            data: payload, 
        }).then(function(response) {
            
            this.props.handleClose("reload");

        }.bind(this)).catch(
            function(error) {
                
                alert("Invalid Data")
                
            }.bind(this)
        );
    }


    
    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        
        return(
            
            <div className={showHideClassName} >
                <section className="modal-main">
                <div className ="modalTitleDiv">
                    <div className = "modalTitle">Add Client</div>
                </div>

                <div style={{height:'80%'}}>

                    <div style={{display:'flex',height:'20%'}}>
                        <div className ="modalInputName">Name</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.name}
                        onChange={(event)=>{this.setState({name: event.target.value})}}></input>
                        </div>   

                    </div>
                    <div style={{display:'flex',height:'20%'}}>
                        <div className ="modalInputName">Phone Number</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.phone_number}
                        onChange={(event)=>{this.setState({phone_number: event.target.value})}}></input></div>   
                    </div>
                    <div style={{display:'flex',height:'20%'}}>
                        <div className ="modalInputName">Email</div>
                        <div className ="modalInputdiv">
                            <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.email}
                        onChange={(event)=>{this.setState({email: event.target.value})}}></input></div>   
                    </div>
                    <div style={{display:'flex',height:'20%'}}>
                        <div className ="modalInputName">Source</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.source}
                        onChange={(event)=>{this.setState({source: event.target.value})}}></input></div>   
                    </div>
                    <div style={{display:'flex',height:'20%'}}>
                        <div className ="modalInputName">Added By</div>
                        <div className ="modalInputdiv">
                             <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.added_by}
                        onChange={(event)=>{this.setState({added_by: event.target.value})}}></input></div>   
                    </div>

                </div>

                <div className = "modalFooterDiv">
                <button className = "clAddOrderButton"  type="button" onClick={()=>{this.handleSubmit()}}>
                    Add
                    </button>
                <button className = "clAddOrderButton" type="button" onClick={()=>{this.props.handleClose()}}>
                    Close
                    </button>

                </div>
                </section>
            </div>
        )
    }
}

export default AddClientModal;
