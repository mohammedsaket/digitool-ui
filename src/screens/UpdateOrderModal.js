import React from 'react';
import '../App.css'
import axios from 'axios';

class UpdateOrderModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Niche : this.props.data.Niche,
            Website : this.props.data.Website,
            OrderDate : this.props.data.StartDate,
            EndDate : this.props.data.EndDate,
            PaymentMethod:this.props.data.PaymentMethod,
            Amount : this.props.data.Amount,
            Status: this.props.data.OrderStatus
                  };
      }


      handleSubmit = ()=> {
        var l = this.props.data.ID;
        var list1 = this.props.dataList.filter(function (val) {
            return val.ID !== l;
          });
        const payload = { 
                    "ID":this.props.data.ID,
                    "Niche":this.state.Niche,
                    "Website":this.state.Website,
                    "StartDate":this.state.OrderDate,
                    "EndDate":this.state.EndDate,
                    "PaymentMethod":this.state.PaymentMethod,
                    "Amount" :this.state.Amount,
                    "OrderStatus":this.state.Status
    }
    list1.push(payload)
    const payload2 = { 
        "ID":this.props.id,
        "Orders":list1
        }
    console.log(payload2)
    
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

    handleChange(event) {
        this.setState({Status: event.target.value});
      }


    
    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        
        return(
            
            <div className={showHideClassName} >
                <section className="modal-main">
                <div className ="modalTitleDiv">
                    <div className = "modalTitle">Update Order</div>
                </div>

                <div style={{height:'80%',overflow:'auto'}}>

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
                        <div className ="modalInputName">Status</div>
                        
                        <div className ="modalInputdiv">
                             {/* <input style={{fontSize:'16px',padding:'5px',width:'60%'}}
                        value={this.state.Status}
                        onChange={(event)=>{this.setState({Status: event.target.value})}}></input> */}
                        <select style={{fontSize:'16px',padding:'5px',width:'64%'}} value={this.state.Status} onChange={(event)=>{this.setState({Status:event.target.value})}}>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                        </div>   
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
                <button className = "clAddOrderButton"  type="button" onClick={()=>{this.handleSubmit()}}>
                    Update
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

export default UpdateOrderModal;
