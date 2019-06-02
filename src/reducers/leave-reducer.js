const initialState = {
    pending: false,
    leaveRequests: [],
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DATA_PENDING':
            return {
                ...state,
                pending: true
            }
            case 'DATA_SUCCESS':
                return {
                    ...state,
                    pending: false,
                    leaveRequests: action.leaveRequests
                }
                case 'DATA_ERROR':
                    return {
                        ...state,
                        pending: false,
                        error: action.error
                    }
                    default:
                        return state;
    }
}