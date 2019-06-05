import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import { Breadcrumb, Table,  Tag,  Tabs } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AcceptLeaveHistory from './accept-leave-history'
import RejectLeaveHistory from './reject-leave-history'
import AllLeaveHistory from './all-leave-history'
import {fetchAllLeaveRequests} from '../api/leave-request-service'

const TabPane = Tabs.TabPane;
const allrequests = [
  {
    title: 'Employee Name',
    dataIndex: 'name',
    key: 'name',
  },
{
title: 'Leave Type',
key: 'tags',
dataIndex: 'tags',
render: tags => (
  <span>
    {tags.map(tag => {
      let color = tag ;
      if (tag === 'Medical') {
        color = 'volcano';
      }
      else if (tag === 'Annual') {
       color = 'green';
     }
     else if (tag === 'Casual') {
       color = 'geekblue';
     }
      
      return (
        <Tag color={color} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      );
    })}
  </span>
),
},

{
title: 'Start Date',
dataIndex: 'sdate',
},
{
title: 'End Date',
dataIndex: 'edate',
},
{
title: 'Number of Days',
dataIndex: 'number',
},
{
title: 'Reason',
dataIndex: 'reason',
},
{
title: 'Status',
dataIndex: 'status',

},
// {
//   title: 'Status',
//   key: 'statustags',
//   dataIndex: 'status',
//   render: statustags => (
//     <span>
//       {statustags.map(tag => {
//         let color = tag ;
//         if (tag === 'PENDING') {
//           color = 'volcano';
//         }
//         if (tag === 'ACCEPTED') {
//          color = 'green';
//        }
//        else if (tag === 'REJECTED') {
//          color = 'geekblue';
//        }else if(tag === 'FOR_CANCEL') {
//         color = 'orange';
//       }
        
//         return (
//           <Tag color={color} key={tag}>
//             {tag.toUpperCase()}
//           </Tag>
//         );
//       })}
//     </span>
//   ),
//   },

];



class LeaveHistory extends React.Component {
  state = {
    activeTab: "1"
  };
  componentDidMount(){
    console.log(this.props.location.pathname);
   if(this.props.location.pathname=="/leavehistory"){
    this.setState({
      activeTab: '1'
    });
   }else if(this.props.location.pathname=="/leavehistory/accepted"){
    this.setState({
      activeTab: '2'
    });
   }else if(this.props.pathname=="/leavehistory/rejected"){
    this.setState({
      activeTab: '3'
    });
   }
  }

  changeTab = activeKey => {
    console.log(activeKey);
    this.setState({
      activeTab: activeKey
    });

    if(activeKey==1){
      this.props.history.push("/leavehistory");
      this.forceUpdate()
    }else if(activeKey==2){
      this.props.history.push("/leavehistory/accepted");
      this.forceUpdate()
    }else if(activeKey==3){
      this.props.history.push("/leavehistory/rejected");
      this.forceUpdate()
    }
  };

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
          <Breadcrumb.Item>Leave History</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Switch> 
          <Tabs activeKey={this.state.activeTab}  onChange={this.changeTab}>
              <TabPane tab="All Requests" key="1" >
                <Route exact path="/leavehistory" component={AllLeaveHistory} />
              </TabPane>
              <TabPane tab="Accepted" key="2" >
                <Route exact path="/leavehistory/accepted" component={AcceptLeaveHistory} />     
              </TabPane>
              <TabPane tab="Rejected" key="3">
                  <Route path="/leavehistory/rejected" component={RejectLeaveHistory} />
              </TabPane> 
          </Tabs>
        </Switch>
      </div>
    </React.Fragment>
    );
  }
}

export default LeaveHistory