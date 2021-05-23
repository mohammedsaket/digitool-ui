import React from 'react';
import {Table} from "react-bootstrap"
import AddClientModal from './AddClientModal'
import UpdateClientModal from './UpdateClientModal'
import DeleteClientModal from './DeleteClientModal'
import ShowOrderModal from './ShowOrderModal'
import AddOrderModal from './AddOrderModal'


class CL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    search : '',
                    addClientShow : false,
                    updateClientShow : false,
                    deleteClientShow : false,
                    addOrderShow : false,
                    showOrderShow : false,
                    selectedClient: '',
                    deleteClient:'',
                    showOrderID:''
                  };

      }

      componentDidMount () {
        this.props.updateCustomerData();
      }

      handleSearch = (event) => {
        this.setState({search: event.target.value});
      }

      showaddClientModal = () => {
        this.setState({ addClientShow: true });
      };
    
      hideaddClientModal = (val) => {
        this.setState({ addClientShow: false });
        if (val){
            window.location.reload(true);
        }
      };

      showupdateClientModal = (val) => {
        this.setState({ updateClientShow: true ,selectedClient : val});
      };
    
      hideupdateClientModal = (val) => {
        this.setState({ updateClientShow: false });
        if (val){
            window.location.reload(true);
        }
      };

      showdeleteClientModal = (val) => {
        this.setState({ deleteClientShow: true,deleteClient : val});
      };
    
      hidedeleteClientModal = (val) => {
        this.setState({ deleteClientShow: false });
        if (val){
            window.location.reload(true);
        }
      };

      showaddOrderModal = (val) => {
        this.setState({ addOrderShow: true ,showOrderID : val});
      };
    
      hideaddOrderModal = () => {
        this.setState({ addOrderShow: false });
      };

      showshowOrderModal = (val) => {
        this.setState({ showOrderShow: true,showOrderID:val});
      };
    
      hideshowOrderModal = () => {
        this.setState({ showOrderShow: false });
      };

      
      
    render(){
    const sn = 1;
       const listDiv = this.props.CustomerData.map((val)=>
       <div key = {val.ID} className = "listDiv">
           
           <div className = "titleDiv">
           <div className ="title">
               {val.Name}
               </div>

           </div>

           <div className = "buttonDiv">
           
           <button className = "clAddOrderButton" 
                 
                 onClick={()=>{this.showaddOrderModal(val.ID)}}>Add Order
                 </button>
            <button className = "clShowOrderButton" 
                 
                 onClick={()=>{this.showshowOrderModal(val.ID)}}>Show Orders
                 </button>
               
           </div>
           <div className = "iconDiv">
           <div className = "loadericon" onClick={() =>{this.showupdateClientModal(val)}}>
           <i className="fas fa-user-edit"> </i>
           </div>

           <div className = "loadericon" onClick={()=>{this.showdeleteClientModal(val.ID)}}>
           {/* <i class="fas fa-trash-alt"></i> */}
           <i className="fas fa-user-minus"></i>
           </div>

           </div>
           </div>

   )
        return(
            <div>
                <div className = "clHeader">
                <input style={{ height:35,width:340,marginLeft:30,marginTop:'17px',marginRight:10,fontSize:17}} type="text" name="title" placeholder="Search" 
              value={this.state.search}
              onChange={this.handleSearch}
              />
                 <button className = "clSearchButton" 
                 
                 onClick={this.handleSubmit}>Search
                 </button>


                 <button className = "clAddClientButton" 
                 
                 onClick={this.showaddClientModal}>Add Client
                 </button>


                </div>

                <div style ={{
                    overflow: 'auto',
                    width: '100%',
                    height: '700px'
                }}>
                    {listDiv}
                </div>
                <AddClientModal data = {this.props.CustomerData} show={this.state.addClientShow} handleClose={this.hideaddClientModal}></AddClientModal>
                {this.state.updateClientShow &&<UpdateClientModal dataItem = {this.state.selectedClient} data = {this.props.CustomerData} show={this.state.updateClientShow} handleClose={this.hideupdateClientModal}></UpdateClientModal>}
                {this.state.deleteClientShow && <DeleteClientModal id={this.state.deleteClient} show={this.state.deleteClientShow} handleClose={this.hidedeleteClientModal}></DeleteClientModal>}
                {this.state.showOrderShow && <ShowOrderModal id= {this.state.showOrderID} show={this.state.showOrderShow}  data = {this.props.CustomerData.find(x => x.ID === this.state.showOrderID).Orders} handleClose={this.hideshowOrderModal}></ShowOrderModal>}
                {this.state.addOrderShow && <AddOrderModal id= {this.state.showOrderID} data = {this.props.CustomerData.find(x => x.ID === this.state.showOrderID).Orders} show={this.state.addOrderShow} handleClose={this.hideaddOrderModal}></AddOrderModal>}

               


            </div>
        )
    }
}

export default CL;
