const DATA_PENDING = 'DATA_PENDING';
const DATA_SUCCESS = 'DATA_SUCCESS';
const DATA_ERROR = 'DATA_ERROR';
const DATA_APPROVED_LEAVE_SUCCESS = 'DATA_APPROVED_LEAVE_SUCCESS';
export const fetchProductsPending = () => {
    return {
        type: DATA_PENDING
    }
};

export const fetchProductsSuccess = (leaveRequestData) => {
    return {
        type: DATA_SUCCESS,
        leaveRequests: leaveRequestData
    }
};

export const fetchProductsError = (error) => {
    return {
        type: DATA_ERROR,
        error: error
    }
};
export const fetchApprovedLeaveHistorySuccess = (leaveHistoryData) => {
    return {
        type: DATA_APPROVED_LEAVE_SUCCESS,
        approvedLeaveRequests: leaveHistoryData
    }
};