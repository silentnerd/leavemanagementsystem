import axios from "axios";
import {
  fetchViewMyLeavePending,
  fetchViewMyLeaveSuccess,
  fetchViewMyLeaveError
} from "../actions/view-my-leave-history-action";

function fetchViewMyLeaveHistory() {
  return dispatch => {
    dispatch(fetchViewMyLeavePending());
    axios
      .get("http://localhost:8050/hrm_system/leaverequest")
      .then(function(res) {
        console.log(res.data);
        const viewMyLeaves = [];
        for (let i = 0; i < res.data.length; i++) {
          // loop through your data
          viewMyLeaves.push({
            key: res.data[i].id,
            name: res.data[i].fullName,
            tags: [res.data[i].leaveTypeValue],
            sdate: res.data[i].startDate,
            edate: res.data[i].endDate,
            number: res.data[i].noOfDays,
            reason: res.data[i].reason
          });
        }
        console.log(viewMyLeaves);
        dispatch(fetchViewMyLeaveSuccess(viewMyLeaves));
        // return viewMyLeaves;
      })
      .catch(function(error) {
        // handle error
        dispatch(fetchViewMyLeaveError(error));
        console.log(error);
      });
  };
}

export default fetchViewMyLeaveHistory;
