import React from 'react';
import { Breadcrumb, Table, Tag, Input } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPendingLeaveRequests} from './api/leave-request-service'

const Search = Input.Search;
const columns = [
  {
         title: 'Employee Name',
         dataIndex: 'name',
         key: 'name',
       },
       {
         title: 'Start Date',
         dataIndex: 'sdate',
         key: 'date',
       },
       {
         title: 'End Date',
         dataIndex: 'edate',
         key: 'date',
       },
       {
         title: 'Number of Days',
         key: 'number',
         dataIndex: 'number',
 
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
         title: 'Reason',
         key: 'reason',
         dataIndex: 'reason',
       },
   
 ];
class ViewLeaveRequest extends React.Component {
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
      this.props.getPendingLeaveRequests();
    }

    componentDidMount(){
      this.props.getPendingLeaveRequests();
    }
  render() {
   
    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
          <Breadcrumb.Item>View Request</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Search placeholder="Search..." onSearch={value => console.log(value)}  style={{ width: 200 }}/>
        <br></br>
        <br></br>
          <Table columns={columns} dataSource={this.props.leaveRequests} />

        </div>
      </React.Fragment>

    );
  }
}
const mapStateToProps = (state) => ({
  error: state.getPendingLeaveRequestStore.error,
  leaveRequests: state.getPendingLeaveRequestStore.leaveRequests,
  pending: state.getPendingLeaveRequestStore.pending,
});
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      getPendingLeaveRequests: fetchPendingLeaveRequests
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ViewLeaveRequest);
