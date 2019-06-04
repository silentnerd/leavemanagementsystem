const initialState = {
    pending: false,
    approvedLeaveRequests: [],
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DATA_PENDING':
            console.log('pending')
            return {
                ...state,
                pending: true
            }
            
        case 'DATA_APPROVED_LEAVE_SUCCESS':
            console.log(action.approvedLeaveRequests);
 
            return {
                ...state,
                pending: false,
                approvedLeaveRequests: action.approvedLeaveRequests
            }
        case 'DATA_ERROR':
                console.log('error')

            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}