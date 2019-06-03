import axios from 'axios';
import {loginUser, userAuthenticationSuccess, userAuthenticationError} from '../actions/index';

function userLogin(loginCredential) {
    return(dispatch) => {
       // dispatch(fetchProductsPending());
   console.log(loginCredential);
        axios.post("http://localhost:8010/api/auth/signin", loginCredential).then(function (res) {
            console.log(res);
            
            //dispatch(fetchProductsSuccess(cancelLeaveRequests));
            return res;
        })
        .catch(function (error) {
            // handle error
            dispatch(userAuthenticationError(error));
            console.log(error);
        });
       // .finally(function () {
            // always executed
        //});
           
       
    }
    
}

export default userLogin;