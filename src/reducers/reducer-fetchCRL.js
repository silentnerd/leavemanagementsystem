const initialState = {
    pending: false,
    cancelLeaveRequests: [],
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CANCEL_LEAVE_REQUESTS_PENDING':
            return {
                ...state,
                pending: true
            }
            case 'FETCH_CANCEL_LEAVE_REQUESTS_SUCCESS':
                return {
                    ...state,
                    pending: false,
                    cancelLeaveRequests: action.cancelLeaveRequests
                }
                case 'FETCH_CANCEL_LEAVE_REQUESTS_ERROR':
                    return {
                        ...state,
                        pending: false,
                        error: action.error
                    }
                    default:
                        return state;
    }
}
/*
export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;*/