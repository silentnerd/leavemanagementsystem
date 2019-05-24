import axios from 'axios';
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/index';

function fetchCancelLeaveRequests() {
    return(dispatch) => {
        dispatch(fetchProductsPending());
        axios.get("http://localhost:8050/hrm_system/cancel").then(function (res) {
            const cancelLeaveRequests = [];
            for (let i = 0; i < res.data.length; i++) {
                // loop through your data
                cancelLeaveRequests.push({
                    key: res.data[i].id,
                    name: res.data[i].leaveRequest.user.fullName,
                    view: '',
                    tags: [res.data[i].leaveRequest.leaveTypeValue],
                    reason: res.data[i].reason,
                });
                
            }
            console.log(cancelLeaveRequests);
            dispatch(fetchProductsSuccess(cancelLeaveRequests));
            return cancelLeaveRequests;
        })
        .catch(function (error) {
            // handle error
            dispatch(fetchProductsError(error));
            console.log(error);
        });
       // .finally(function () {
            // always executed
        //});
           
       
    }
    
}

export default fetchCancelLeaveRequests;