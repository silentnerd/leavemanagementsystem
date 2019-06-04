import axios from 'axios';
import moment from 'moment';
import {fetchAcceptPending, fetchApprovedLeaveHistorySuccess, fetchProductsError} from '../actions/leave-action';
const LEAVE_REQUEST_URL="http://localhost:8050/hrm_system"

export  function fetchAllAcceptLeaveRequests() {
    return(dispatch) => {
        // dispatch(fetchAcceptPending());
        axios.get(LEAVE_REQUEST_URL + "/accept").then(function (res) {
            // console.log(res.data)
            const approvedLeaveRequests = [];
            for (let i = 0; i < res.data.length; i++) {
                // loop through your data
                approvedLeaveRequests.push({
                    key:res.data[i].id ,
                    name:res.data[i].leaveRequest.user.fullName,
                    sdate: res.data[i].leaveRequest.startDate,
                    edate: res.data[i].leaveRequest.endDate,
                    number:res.data[i].leaveRequest.noOfDays,
                    reason:res.data[i].leaveRequest.reason,
                    acceptedby:res.data[i].acceptedBy.fullName
                    // rejectedby
                    // rejectedBy
                    // reason
                });
            }
            console.log(approvedLeaveRequests)
            dispatch(fetchApprovedLeaveHistorySuccess(approvedLeaveRequests));
            // return approvedLeaveRequests;
           
        })
        .catch(function (error) {
            // handle error
            // dispatch(fetchAcceptError(error));
            console.log(error);
        });
    }
}
export  function fetchAllRejectLeaveRequests() {
    return(dispatch) => {
        // dispatch(fetchAcceptPending());
        axios.get(LEAVE_REQUEST_URL + "/reject").then(function (res) {
            // console.log(res.data)
            const approvedLeaveRequests = [];
            for (let i = 0; i < res.data.length; i++) {
                // loop through your data
                approvedLeaveRequests.push({
                    key:res.data[i].id ,
                    name:res.data[i].leaveRequest.user.fullName,
                    sdate: res.data[i].leaveRequest.startDate,
                    edate: res.data[i].leaveRequest.endDate,
                    number:res.data[i].leaveRequest.noOfDays,
                    reason:res.data[i].leaveRequest.reason,
                    rejectedby:res.data[i].rejectedBy.fullName,
                    rejectreason:res.data[i].reason
                });
            }
            console.log(approvedLeaveRequests)
            dispatch(fetchApprovedLeaveHistorySuccess(approvedLeaveRequests));
            // return approvedLeaveRequests;
           
        })
        .catch(function (error) {
            // handle error
            // dispatch(fetchAcceptError(error));
            console.log(error);
        });
    }
}