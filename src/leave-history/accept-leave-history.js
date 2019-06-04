import React from 'react';
import {  Table,  Tag } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllAcceptLeaveRequests} from '../api/approve-leave-history-service'

const accepted = [
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
// {
// title: 'Status',
// dataIndex: 'status',

// },
{
title: 'Accepted By',
dataIndex: 'acceptedby',

},

];

class AcceptLeaveHistory extends React.Component {
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
  this.props.getAllAcceptLeaveRequests();
 
}

componentDidMount(){
  
  console.log(this.props.allAcceptedLeaveRequests);
}
  render() {
    return (
        <div >
            <Table columns={accepted} dataSource={this.props.allAcceptedLeaveRequests} />
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.getAcceptedLeaveHistoryStore.error,
  allAcceptedLeaveRequests: state.getAcceptedLeaveHistoryStore.approvedLeaveRequests,
  pending: state.getAcceptedLeaveHistoryStore.pending,
});
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      getAllAcceptLeaveRequests: fetchAllAcceptLeaveRequests
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(AcceptLeaveHistory);
