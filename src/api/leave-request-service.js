import axios from 'axios';
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/leave-action';
const LEAVE_REQUEST_URL="http://localhost:8050/hrm_system/leaverequest"

export  function fetchPendingLeaveRequests() {
    return(dispatch) => {
        dispatch(fetchProductsPending());
        axios.get(LEAVE_REQUEST_URL + "/pending/sinthuja").then(function (res) {
            console.log(res.data)
            const leaveRequests = [];
            for (let i = 0; i < res.data.length; i++) {
                // loop through your data
                leaveRequests.push({
                    key:res.data[i].id ,
                    name:res.data[i].user.fullName,
                    sdate: res.data[i].startDate,
                    edate: res.data[i].endDate,
                    number:res.data[i].noOfDays,
                    reason:res.data[i].reason,
                    tags:[res.data[i].leaveTypeValue]
                });
            }
            dispatch(fetchProductsSuccess(leaveRequests));
            // return leaveRequests;
           
        })
        .catch(function (error) {
            // handle error
            dispatch(fetchProductsError(error));
            console.log(error);
        });
    }
}

export  function fetchAllLeaveRequests() {
    return(dispatch) => {
        dispatch(fetchProductsPending());
        const leaveRequests = [];
        axios.get(LEAVE_REQUEST_URL).then(function (res) {
            console.log(res.data)
            
            for (let i = 0; i < res.data.length; i++) {
                // loop through your data
                leaveRequests.push({
                    key:res.data[i].id ,
                    name:res.data[i].user.fullName,
                    sdate: res.data[i].startDate,
                    edate: res.data[i].endDate,
                    number:res.data[i].noOfDays,
                    reason:res.data[i].reason,
                    tags:[res.data[i].leaveTypeValue],
                    status:[res.data[i].status]
                });
            }
            dispatch(fetchProductsSuccess(leaveRequests));
            // return leaveRequests;
           
        })
        .catch(function (error) {
            // handle error
            dispatch(fetchProductsError(error));
            console.log(error);
        });
    }
}