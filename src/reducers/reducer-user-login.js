const initialState = {
    userRequest: [{
        username: '',
        password: ''
    }],
    user: [],
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                userRequest: action.userRequest
            }
            case 'USER_AUTHENTICATION_SUCCESS':
                return {
                    ...state,
                    user: action.user
                }
                case 'USER_AUTHENTICATION_ERROR':
                    return {
                        ...state,
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