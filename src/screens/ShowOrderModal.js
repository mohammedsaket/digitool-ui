import React from 'react';
import '../App.css'
import UpdateOrderModal from './UpdateOrderModal';

class ShowOrderModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updateOrderShow:false,
            updateOrderID : ''
        };
      }

    showupdateOrderModal = (val) => {
        this.setState({ updateOrderShow: true,updateOrderID:val});
      };
    
    hideupdateOrderModal = (val) => {
        this.setState({ updateOrderShow: false });
        if (val){
            window.location.reload(true);
        }
      };
    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        var body =this.props.data;

        const todoDiv = <div style={{backgroundColor:'red',borderRadius:'15px',fontSize:'13px',padding:'5px 10px'}}>To Do</div>
        const inprogressDiv = <div style={{backgroundColor:'orange',borderRadius:'15px',fontSize:'13px',padding:'5px 10px'}}>In Progress</div>
        const doneDiv = <div style={{backgroundColor:'green',borderRadius:'15px',fontSize:'13px',padding:'5px 10px'}}>Done</div>

        return(
            <div>
            
            <div className={showHideClassName} >
                <section className="modal-main" style={{width:'80%'}}>
                
                <div className ="modalTitleDiv">
                    <div className = "modalTitle">Order List</div>
                </div>
                {this.props.data.length ? 
                <div style={{height:'80%',overflow:'auto'}}>
                
                <div style={{display:'flex'}}>
                    
                    <div className='tableHeader' style={{width:'27%'}}>Niche</div>
                    <div className='tableHeader' style={{width:'19%'}}>Website</div>
                    <div className='tableHeader' style={{width:'10%'}}>Order date</div>
                    <div className='tableHeader' style={{width:'10%'}}>End Date</div>
                    <div className='tableHeader' style={{width:'10%'}}>Payment Details</div>
                    <div className='tableHeader' style={{width:'8%'}}>Status</div>
                    <div className='tableHeader' style={{width:'5%'}}>Actions</div>
                </div>

                <div>

                </div>
                {body.map(row => <div style={{display:'flex'}}>
                <div className='tableBody' style={{width:'27%'}}>{row.Niche}</div>
                    <div className='tableBody' style={{width:'19%'}}>{row.Website}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.StartDate}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.EndDate}</div>
                    <div className='tableBody' style={{width:'10%'}}>{row.PaymentMethod},{row.Amount}</div>
                    <div className='tableBody' style={{width:'8%'}}>{row.OrderStatus === "In Progress" ? inprogressDiv : (row.OrderStatus === "Done"? doneDiv : todoDiv) }</div>
                    <div className='tableBody' style={{width:'5%'}}>
                    <div className = "tableiconDiv">
                        <div className = "tableloadericon" onClick={() =>{this.showupdateOrderModal(row.ID)}}>
                        <i className="fas fa-user-edit"> </i>
                        </div>
                        </div>
                    </div>
                    </div>)}

                </div>: <div style={{height:'80%',overflow:'auto', fontSize:'21px',fontWeight:500,display:'flex',justifyContent:'center',alignItems:'center'}}> No Order Found</div>
                        }
                <div className = "modalFooterDiv">
                <button className = "clAddOrderButton" type="button" onClick={()=>{this.props.handleClose()}}>
                    Close
                    </button>

                </div>
                </section>
            </div>
            {this.state.updateOrderShow && <UpdateOrderModal id= {this.props.id} dataList = {this.props.data} data = {this.props.data.find(x => x.ID === this.state.updateOrderID)} show={this.state.updateOrderShow} handleClose={this.hideupdateOrderModal}></UpdateOrderModal>}

            </div>
        )
    }
}

export default ShowOrderModal;
