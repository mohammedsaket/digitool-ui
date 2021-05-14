import React from 'react';
import '../App.css'
import axios from 'axios';

class DeleteClientModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                  };
      }


      handleSubmit = ()=> {
        const payload = { 
                    "ID":this.props.id
    }
    console.log("Saket",payload)
        axios({
            method: "POST",
            url: "https://digimastertool.herokuapp.com/deleteCustomerList",
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
                <section className="modal-delete-main">
                <div className ="modalDeleteTitleDiv">
                    <div className = "modalTitle">Delete Client</div>
                </div>

                <div style={{padding: '40px 20px',fontSize: '19px'}}>

                Are you sure you want to delete this item?

                </div>

                <div className = "modalDeleteFooterDiv">
                <button className = "clAddOrderButton"  type="button" onClick={()=>{this.handleSubmit()}}>
                    Delete
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

export default DeleteClientModal;
