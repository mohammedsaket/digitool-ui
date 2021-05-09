import React from 'react';
import {Button,Table} from "react-bootstrap"
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"  
import axios from 'axios';

class Aid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    search : "",
                    loading : true,
                    listData : [],
                    filtered: [],
                    select2: undefined
                  };
        this.handleSearch = this.handleSearch.bind(this);
      }
      handleSearch(event) {
        this.setState({search: event.target.value});
      }
      componentDidMount () {
        this.props.updatelistData();
      }
      
      onFilteredChangeCustom = (value, accessor) => {
        let filtered = this.state.filtered;
        let insertNewFilter = 1;
    
        if (filtered.length) {
          filtered.forEach((filter, i) => {
            if (filter["id"] === accessor) {
              if (value === "" || !value.length) filtered.splice(i, 1);
              else filter["value"] = value;
    
              insertNewFilter = 0;
            }
          });
        }
    
        if (insertNewFilter) {
          filtered.push({ id: accessor, value: value });
        }
    
        this.setState({ filtered: filtered });
      };
    

    render(){
        
        const buttonStyle={
            marginLeft:20,
            color: '#93d2db',
            backgroundColor:'#3a5559',
            height:35,
            width:100,
            fontSize:17,
            borderRadius:5,
            fontWeight: 'bold'
        }
        const data = [{  
            name: 'Ayaan',  
            age: 26  
            },{  
             name: 'Ahana',  
             age: 22  
             },{  
             name: 'Peter',  
             age: 40      
             },{  
             name: 'Virat',  
             age: 30  
             },{  
             name: 'Rohit',  
             age: 32  
             },{  
             name: 'Dhoni',  
             age: 37  
             }]  
         const columns = [{  
           Header: 'Website',  
           accessor: 'Website' ,
           width : 280 ,
           filterable : true
           },{  
           Header: 'Niche',  
           accessor: 'Niche'  ,
           width : 350,
           filterable : true
           },{  
            Header: 'DA',  
            accessor: 'DA' , 
            filterable : true,
            filterMethod: (filter, row) => {

                var data = filter.value.split(",")
                var min = parseInt(data[0]) ? parseInt(data[0]) : 0
                var max = parseInt(data[1]) ? parseInt(data[1]) : 100
    
                return row[filter.id] >= min && row[filter.id] <= max;
              },
             
            
            },{  
                Header: 'PA',  
                accessor: 'PA'  , 
                filterable : true,
                filterMethod: (filter, row) => {
    
                    var data = filter.value.split(",")
                    var min = parseInt(data[0]) ? parseInt(data[0]) : 0
                    var max = parseInt(data[1]) ? parseInt(data[1]) : 100
        
                    return row[filter.id] >= min && row[filter.id] <= max;
                  }, 
                },{  
                    Header: 'DR',  
                    accessor: 'DR'  , 
                    filterable : true,
                    filterMethod: (filter, row) => {
        
                        var data = filter.value.split(",")
                        var min = parseInt(data[0]) ? parseInt(data[0]) : 0
                        var max = parseInt(data[1]) ? parseInt(data[1]) : 100
            
                        return row[filter.id] >= min && row[filter.id] <= max;
                      }, 
                    },{  
                        Header: 'Cost Price',  
                        accessor: 'Cost Price'  , 
                        filterable : true,
                        filterMethod: (filter, row) => {
            
                            var data = filter.value.split(",")
                            var min = parseInt(data[0]) ? parseInt(data[0]) : 0;
                            var max = parseInt(data[1]) ? parseInt(data[1])  : 1000000000;
                            
                            return row[filter.id] >= min && row[filter.id] <= max;
                          }, 
                        },{  
                        Header: 'Follow',  
                        accessor: 'Follow'  
                        },{  
                            Header: 'Traffic',  
                            accessor: 'Traffic'  
                            },{  
                                Header: 'Spam',  
                                accessor: 'Spam'  
                                },{  
                                    Header: 'Semrush',  
                                    accessor: 'Semrush'  
                                    },{  
                                        Header: 'Link Ins Cost',  
                                        accessor: 'Link Ins Cost'  
                                        },{  
                                                Header: 'Casino',  
                                                accessor: 'Casino'  
                                                },{  
                                                    Header: 'Similar Web',  
                                                    accessor: 'Similar Web'  
                                                    },{  
                                                        Header: 'TAT',  
                                                        accessor: 'TAT'  
                                                        },{  
                                                            Header: 'Sample URL',  
                                                            accessor: 'Sample URL'  
                                                            }
        
        ]  

        return(
            <div>
           {this.props.listData.length ==0 ?<div className="loader center">
      <i className="fa fa-cog fa-spin" />
    </div> : <div>
                
            <div>  
              <ReactTable  
                  data={this.props.listData}  
                  columns={columns}  
                  defaultPageSize = {20}  
                  pageSizeOptions = {[20,50, 100]}  
                  
        //         filtered={this.state.filtered}
        //         onFilteredChange={(filtered, column, value) => {
        //             this.onFilteredChangeCustom(value, column.id || column.accessor);
        //         }}
        //         defaultFilterMethod={(filter, row, column) => {
        //             const id = filter.pivotId || filter.id;
        //             if (typeof filter.value === "object") {
        //             return row[id] !== undefined
        //                 ? filter.value.indexOf(row[id]) > -1
        //                 : true;
        //             } else {
        //             return row[id] !== undefined
        //                 ? String(row[id]).indexOf(filter.value) > -1
        //                 : true;
        //             }
        //   }}
              />  
          </div> 
          </div>}
          </div>
        )
    }
}

export default Aid;
