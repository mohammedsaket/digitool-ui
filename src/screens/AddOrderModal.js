import React from 'react';
import '../App.css'
import axios from 'axios';

class AddOrderModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                    Niche : '',
                    Website : '',
                    OrderDate : '',
                    EndDate : '',
                    PaymentMethod:'',
                    Amount : ''
                  };
      }


      handleSubmit = ()=> {
        var dataList = this.props.data;
        const payload = { 
                    "ID":this.props.data.length +1,
                    "Niche":this.state.Niche,
                    "Website":this.state.Website,
                    "StartDate":this.state.OrderDate,
                    "EndDate":this.state.EndDate,
                    "PaymentMethod":this.state.PaymentMethod,
                    "Amount" :this.state.Amount
            }
    dataList.push(payload)

    const payload2 = { 
        "ID":this.props.id,
        "Orders":dataList
        }

    console.log("Saket",payload2,dataList);
        axios({
            method: "POST",
            url: "https://digimastertool.herokuapp.com/postOrderList",
            data: payload2, 
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
                        value={this.state.Niche}
                        onChange={(event)=>{this.setState({Niche: event.target.value})}}></input>
                        </div>   

                    </div>
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Website</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.Website}
                        onChange={(event)=>{this.setState({Website: event.target.value})}}></input></div>   
                    </div>
                    
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Order date</div>
                        <div className ="modalInputdiv">
                            <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.OrderDate}
                        onChange={(event)=>{this.setState({OrderDate: event.target.value})}}></input></div>   
                    </div>
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">End Date</div>
                        <div className ="modalInputdiv"> 
                        <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.EndDate}
                        onChange={(event)=>{this.setState({EndDate: event.target.value})}}></input></div>   
                    </div>
                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Payment Method</div>
                        <div className ="modalInputdiv">
                             <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.PaymentMethod}
                        onChange={(event)=>{this.setState({PaymentMethod: event.target.value})}}></input></div>   
                    </div>

                    <div style={{display:'flex',height:'15%'}}>
                        <div className ="modalInputName">Amount</div>
                        <div className ="modalInputdiv">
                             <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.Amount}
                        onChange={(event)=>{this.setState({Amount: event.target.value})}}></input></div>   
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
