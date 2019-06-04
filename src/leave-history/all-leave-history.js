import React from 'react';
import { Breadcrumb, Table,  Tag,  Tabs } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AcceptLeaveHistory from './accept-leave-history'
import RejectLeaveHistory from './reject-leave-history'
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

class AllLeaveHistory extends React.Component {
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
  console.log(this.props.allLeaveRequests);
}
  render() {
    return (
        <div className="">
            <Table columns={allrequests} dataSource={this.props.allLeaveRequests} />
        </div>
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
export default connect(mapStateToProps, matchDispatchToProps)(AllLeaveHistory);
