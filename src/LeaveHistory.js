import React from 'react';
import { Breadcrumb, Table,  Tag,  Tabs } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllLeaveRequests} from './api/leave-request-service'

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

];

const accepted = [
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
{
title: 'Accepted By',
dataIndex: 'acceptedby',

},

];

const rejected = [
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
{
title: 'Rejected By',
dataIndex: 'rejectedby',

},
{
title: 'Reject Reason',
dataIndex: 'rejectreason',

},

];

class LeaveHistory extends React.Component {
  constructor(props) {
    super(props);
this.shouldComponentRender = this.shouldComponentRender.bind(this);
}
shouldComponentRender() {
  // const {pending} = this.props;
  if(this.pending === false) return false;
  // more tests
  return true;
}

componentWillMount() {
  this.props.getAllLeaveRequests();
}

componentDidMount(){
  this.props.getAllLeaveRequests();
}
  render() {
    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
          <Breadcrumb.Item>Leave History</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Tabs >
            <TabPane tab="All Requests" key="1">
            <Table columns={allrequests} dataSource={this.props.allLeaveRequests} />
    </TabPane>
            <TabPane tab="Accepted" key="2">
            {/* <Table columns={accepted}  dataSource={data}/> */}
    </TabPane>
            <TabPane tab="Rejected" key="3">
            {/* <Table columns={rejected}  dataSource={data}/> */}
    </TabPane>
          </Tabs>


        </div>

      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.getLeaveRequestStore.error,
  allLeaveRequests: state.getLeaveRequestStore.leaveRequests,
  pending: state.getLeaveRequestStore.pending,
});
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      getAllLeaveRequests: fetchAllLeaveRequests
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(LeaveHistory);
