import axios from 'axios';
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/carry-forward-action';

function fetchCarryForwardRequest() {
    return(dispatch) => {
        dispatch(fetchProductsPending());
        axios.get("http://localhost:8050/hrm_system/carryforwardrequest").then(function (res) {
            console.log(res.data)
            const carryForwardRequest = [];
            for (let i = 0; i < res.data.length; i++) {
                // loop through your data
                carryForwardRequest.push({
                    key: res.data[i].id,
                    name: res.data[i].user.fullName,
                    noOfDays: res.data[i].carryForwardDays,
                    
                });
                
            }
            console.log(carryForwardRequest);
            dispatch(fetchProductsSuccess(carryForwardRequest));
            // return carryForwardRequest;
        })
        .catch(function (error) {
            // handle error
            dispatch(fetchProductsError(error));
            console.log(error);
        });
      
    }
}

export default fetchCarryForwardRequest;
