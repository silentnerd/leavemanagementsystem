import React from 'react';
import { Table,  Tag} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllRejectLeaveRequests} from '../api/approve-leave-history-service'

const rejected = [
  {
    title: 'Employee Name',
    dataIndex: 'name',
    key: 'name',
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

class RejectLeaveHistory extends React.Component {
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
  this.props.getAllRejectLeaveRequests();
}

componentDidMount(){
  this.props.getAllRejectLeaveRequests();
}
  render() {
    return (
        <div className="">
            <Table columns={rejected} dataSource={this.props.allRejectedLeaveRequests} />
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.getRejectedLeaveHistoryStore.error,
  allRejectedLeaveRequests: state.getRejectedLeaveHistoryStore.approvedLeaveRequests,
  pending: state.getRejectedLeaveHistoryStore.pending,
});
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllRejectLeaveRequests: fetchAllRejectLeaveRequests
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(RejectLeaveHistory);
