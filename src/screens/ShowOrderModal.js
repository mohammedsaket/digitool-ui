import React from 'react';
import '../App.css'
import axios from 'axios';

class ShowOrderModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    
    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        var heading = ['Niche', 'Order date','End Date','Website','P.A','T.A','Payment Status','Payment Amount','Status'];
        var body =this.props.data;

        console.log("Saket",this.props.data,this.props.id)
        return(
            
            <div className={showHideClassName} >
                <section className="modal-main" style={{width:'80%'}}>
                <div className ="modalTitleDiv">
                    <div className = "modalTitle">Order List</div>
                </div>

                <div style={{height:'80%',overflow:'auto'}}>
                
                <div style={{display:'flex'}}>
                    
                    <div className='tableHeader' style={{width:'15%'}}>Niche</div>
                    <div className='tableHeader' style={{width:'10%'}}>Website</div>
                    <div className='tableHeader' style={{width:'10%'}}>Order date</div>
                    <div className='tableHeader' style={{width:'10%'}}>End Date</div>
                    <div className='tableHeader' style={{width:'10%'}}>Details</div>
                    <div className='tableHeader' style={{width:'10%'}}>Payment Details</div>
                    <div className='tableHeader' style={{width:'10%'}}>Status</div>
                    <div className='tableHeader' style={{width:'10%'}}>Actions</div>
                </div>

                <div>

                </div>
                {body.map(row => <div style={{display:'flex'}}>
                <div className='tableBody' style={{width:'15%'}}>{row.Niche}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.Website}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.StartDate}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.EndDate}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.Details}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.PaymentMethod},{row.Amount}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.OrderStatus}</div>
                    <div className='tableBody' style={{width:'10%'}}>
                    <div className = "tableiconDiv">
                        <div className = "tableloadericon" onClick={() =>{}}>
                        <i className="fas fa-user-edit"> </i>
                        </div>
                        </div>
                    </div>
                    </div>)}

                </div>

                <div className = "modalFooterDiv">
                <button className = "clAddOrderButton" type="button" onClick={()=>{this.props.handleClose()}}>
                    Close
                    </button>

                </div>
                </section>
            </div>
        )
    }
}

export default ShowOrderModal;
