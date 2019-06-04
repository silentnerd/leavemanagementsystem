const initialState = {
    pending: false,
    carryForwardRequest: [],
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
                console.log("sucess..")
               console.log(action.carryForwardRequest)
                return {
                    ...state,
                    pending: false,
                    carryForwardRequest: action.carryForwardRequest
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
/*
export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;*/