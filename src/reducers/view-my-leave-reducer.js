const initialState = {
  pending: false,
  viewMyLeaves: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "DATA_VIEW_MY_LEAVE_HISTORY_PENDING":
      return {
        ...state,
        pending: true
      };
    case "DATA_VIEW_MY_LEAVE_HISTORY_SUCCESS":
      return {
        ...state,
        pending: false,
        viewMyLeaveHistory: action.viewMyLeaveHistory
      };
    case "DATA_VIEW_MY_LEAVE_HISTORY_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
