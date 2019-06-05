import axios from 'axios';
const BASE_URL="http://localhost:8050/hrm_system";
export  function fetchAllLeaveType() {
    const leaveType = [];
    return() => {
        axios.get(BASE_URL + "/leavetype").then(function (res) {
            console.log(res.data)
            for (let i = 0; i < res.data.length; i++) {
                // loop through your data
                leaveType.push({
                    key:res.data[i].id ,
                    type:res.data[i].leaveTypeValue,
                
                });
            }
            return leaveType;
        })
        console.log(leaveType)
    }
}
