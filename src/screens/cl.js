import React from 'react';
import {Table} from "react-bootstrap"
class CL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    search : '',
                    
                  };
      }

      componentDidMount () {
        this.props.updateCustomerData();
      }

      handleSearch = (event) => {
        this.setState({search: event.target.value});
      }

      
      
    render(){
       const listDiv = this.props.CustomerData.map((val)=>

       <div className = "listDiv">
           <div className = "snoDiv">
               <div className ="sno">
               {val.ID} .
               </div>

           </div>
           <div className = "titleDiv">
           <div className ="title">
               {val.Name}
               </div>

           </div>

           <div className = "buttonDiv">
           
           <button className = "clAddOrderButton" 
                 
                 onClick={()=>{}}>Add Order
                 </button>
            <button className = "clShowOrderButton" 
                 
                 onClick={()=>{}}>Show Orders
                 </button>
               
           </div>
           <div className = "iconDiv">
           <div className = "loadericon">
           <i class="fas fa-user-edit"></i>
           </div>

           <div className = "loadericon">
           {/* <i class="fas fa-trash-alt"></i> */}
           <i class="fas fa-user-minus"></i>
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
                 
                 onClick={this.handleAddClient}>Add Client
                 </button>


                </div>

                <div style ={{
                    overflow: 'auto',
                    width: '100%',
                    height: '700px'
                }}>
                    {listDiv}
                </div>
            </div>
        )
    }
}

export default CL;
