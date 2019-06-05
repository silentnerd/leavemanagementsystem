const DATA_VIEW_MY_LEAVE_HISTORY_PENDING = "DATA_VIEW_MY_LEAVE_HISTORY_PENDING";
const DATA_VIEW_MY_LEAVE_HISTORY_SUCCESS = "DATA_VIEW_MY_LEAVE_HISTORY_SUCCESS";
const DATA_VIEW_MY_LEAVE_HISTORY_ERROR = "DATA_VIEW_MY_LEAVE_HISTORY_ERROR";

export const fetchViewMyLeavePending = () => {
  return {
    type: DATA_VIEW_MY_LEAVE_HISTORY_PENDING
  };
};

export const fetchViewMyLeaveSuccess = data => {
  return {
    type: DATA_VIEW_MY_LEAVE_HISTORY_SUCCESS,
    viewMyLeaveHistory: data
  };
};

export const fetchViewMyLeaveError = error => {
  return {
    type: DATA_VIEW_MY_LEAVE_HISTORY_ERROR,
    error: error
  };
};
