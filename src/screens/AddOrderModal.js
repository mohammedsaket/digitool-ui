import React from 'react';
import '../App.css'
import axios from 'axios';

class AddOrderModal extends React.Component {

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
                    <div className = "modalTitle">Add Order</div>
                </div>

                <div style={{height:'80%',overflow:'auto',paddingTop:'5%'}}>

                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Niche</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.name}
                        onChange={(event)=>{this.setState({name: event.target.value})}}></input>
                        </div>   

                    </div>
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Website</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.phone_number}
                        onChange={(event)=>{this.setState({phone_number: event.target.value})}}></input></div>   
                    </div>
                    
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Order date</div>
                        <div className ="modalInputdiv">
                            <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.email}
                        onChange={(event)=>{this.setState({email: event.target.value})}}></input></div>   
                    </div>
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">End Date</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.source}
                        onChange={(event)=>{this.setState({source: event.target.value})}}></input></div>   
                    </div>
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Payment Method</div>
                        <div className ="modalInputdiv">
                             <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.added_by}
                        onChange={(event)=>{this.setState({added_by: event.target.value})}}></input></div>   
                    </div>

                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Amount</div>
                        <div className ="modalInputdiv">
                             <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.added_by}
                        onChange={(event)=>{this.setState({added_by: event.target.value})}}></input></div>   
                    </div>

                </div>

                <div className = "modalFooterDiv">
                {(this.state.name != '' && this.state.email != '' && this.state.phone_number != '' && this.state.source != '' && this.state.added_by != '')? <button className = "clAddOrderButton"  type="button" onClick={()=>{this.handleSubmit()}}>
                    Add
                    </button> :
                    <button className = "clAddOrderButton"  type="button" onClick={()=>{}}>
                    Add
                    </button>}
                
                <button className = "clAddOrderButton" type="button" onClick={()=>{this.props.handleClose()}}>
                    Close
                    </button>

                </div>
                </section>
            </div>
        )
    }
}

export default AddOrderModal;
