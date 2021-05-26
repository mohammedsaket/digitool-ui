import React from 'react';
import '../App.css'
import Highcharts from 'highcharts';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: ""
        }
    }

    highChartsRender() {
      
        Highcharts.chart({
            chart: {
              type: 'pie',
              renderTo: 'orderChart',
              height: 340,
            },
            title: {
              verticalAlign: 'middle',
              floating: true,
              text: 'Orders',
              style: {
                fontSize: '15px',
              }
            },
            plotOptions: {
              pie: {
                dataLabels: {
                    format: '{point.name}: {point.percentage:.1f} %'
                },
                innerSize: '70%'
              }
            },
            credits: {
              enabled: false
            },
            series: [{
              name: 'Orders',
              data: [
                  {
                    name: 'To Do',
                    y: this.props.chartData.Orders? this.props.chartData.Orders.todo:0,
                  },
                  {
                    name: 'In Progress',
                    y: this.props.chartData.Orders ? this.props.chartData.Orders.inprogress: 0,
                  },
                  {
                    name: 'Done',
                    y: this.props.chartData.Orders ? this.props.chartData.Orders.done : 0,
                  }
              ]
          }]
        });
    }

    highChartsRender2() {
      var obj = this.props.chartData.Niche;
      var item_list = []
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          item_list.push({name:key,y:obj[key],drilldown:key})
        }
      }
      Highcharts.chart({
          chart: {
            type: 'column',
            renderTo: 'nicheChart',
            height: 340,
          },
          title: {
            text: 'Website Niche',
            style: {
              fontSize: '15px',
            }
          },
          xAxis: {
              type: 'category'
          },
          yAxis: {
              title: {
                  text: ''
              }
      
          },
          plotOptions: {
            pie: {
              dataLabels: {
                  format: '{point.name}: {point.percentage:.1f} %'
              },
            }
          },
          credits: {
            enabled: false
          },
          series: [
            {
                name: "Niche",
                colorByPoint: true,
                data : item_list
              }]
      });
  }
  highChartsRender3() {
    var obj = this.props.chartData.DA;
    var item_list = []
    var x =""
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key == 'a'){x = '0-15'}
        else if (key == 'b'){x = '16-30'}
        else if (key == 'c'){x = '31-45'}
        else if (key == 'd'){x = '46-60'}
        else if (key == 'e'){x = '61-75'}
        else if (key == 'f'){x = '75+'}
        item_list.push({name:x,y:obj[key],drilldown:x})
      }
    }
    Highcharts.chart({
        chart: {
          type: 'column',
          renderTo: 'daChart',
          height: 340,
        },
        title: {
          text: 'Website DA',
          style: {
            fontSize: '15px',
          }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: ''
            }
    
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            dataLabels: {
                format: '{point.name}: {point.percentage:.1f} %'
            },
          }
        },
        series: [
          {
              name: "DA",
              colorByPoint: true,
              data : item_list
            }]
    });
}

    componentDidUpdate() {
      
        this.highChartsRender();
        this.highChartsRender2();
        this.highChartsRender3();
    }
    
    render(){
        
        
       
        return(
            <div style={{padding:'8px'}}>
              
            <div style={{display:'flex'}}>
            
              <div style={{width:'690px',paddingRight:'12px',borderRight:'1px solid black',borderBottom:'1px solid black'}}>
              <div id="nicheChart"> </div>
              </div>
             
             
              <div style={{width:'690px',paddingLeft:'12px',borderBottom:'1px solid black'}}>
              <div id="daChart"> </div>
              </div>
              
              

             
            </div>


            <div style={{display:'flex'}}>
              
              <div style={{width:'690px',paddingRight:'12px',borderRight:'1px solid black'}}>
              <div id="orderChart"> </div>
              </div>
              
              
              <div style={{width:'690px',height:'340px'}}>
                {/* <div style={{height:'14%',fontSize:'27px',fontWeight:'bold',display:'flex',justifyContent:'center',alignItems:'center'}}>Details</div> */}
                <div style={{display:'flex',height:'43%',paddingTop:'6%'}}>
                  <div style={{height:'100%',width:'50%'}}>
                    <div style={{height:'25%',fontWeight:500,fontSize:'27px',display:'flex',justifyContent:'center',alignItems:'center',color:'#696969'}}>Websites</div>
                    <div style={{height:'60%',fontWeight:800,fontSize:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>{this.props.chartData.details?this.props.chartData.details.wc:1234}</div>

                  </div>
                  <div style={{height:'100%',width:'50%'}}>
                    <div style={{height:'25%',fontWeight:500,fontSize:'27px',display:'flex',justifyContent:'center',alignItems:'center',color:'#696969'}}>Clients</div>
                    <div style={{height:'60%',fontWeight:800,fontSize:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>{this.props.chartData.details?this.props.chartData.details.cc:12}</div>

                  </div>
                </div>
                <div style={{display:'flex',height:'43%'}}>
                  <div style={{height:'100%',width:'50%'}}>
                    <div style={{height:'25%',fontWeight:500,fontSize:'27px',display:'flex',justifyContent:'center',alignItems:'center',color:'#696969'}}>Orders</div>
                    <div style={{height:'60%',fontWeight:800,fontSize:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>{this.props.chartData.details?this.props.chartData.details.oc:12}</div>

                  </div>
                  <div style={{height:'100%',width:'50%'}}>
                    <div style={{height:'25%',fontWeight:500,fontSize:'27px',display:'flex',justifyContent:'center',alignItems:'center',color:'#696969'}}>Revenue</div>
                    <div style={{height:'60%',fontWeight:800,fontSize:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>${this.props.chartData.details?this.props.chartData.details.r:123}</div>

                  </div>
                </div>
              </div>
              
              

             
            </div>

            </div>
            
        )
    }
}

export default Home;
