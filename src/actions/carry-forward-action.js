const DATA_PENDING = 'DATA_PENDING';
const DATA_SUCCESS = 'DATA_SUCCESS';
const DATA_ERROR = 'DATA_ERROR';

export const fetchProductsPending = () => {
    return {
        type: DATA_PENDING
    }
};

export const fetchProductsSuccess = (carryForwardRequest) => {
    return {
        type: DATA_SUCCESS,
        carryForwardRequest: carryForwardRequest
    }
};

export const fetchProductsError = (error) => {
    return {
        type: DATA_ERROR,
        error: error
    }
};