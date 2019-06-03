import {combineReducers} from 'redux';
import CollapseSideBarReducer from './reducer-aside-toggle';
import FetchCancelLeaveRequestsReducer from './reducer-fetchCRL'
import userLoginReducer from './reducer-user-login';
import FetchLeaveRequestsReducer from './leave-reducer'


const allReducers = combineReducers({
    isCollapsed: CollapseSideBarReducer,
    getCancelLeaveRequests: FetchCancelLeaveRequestsReducer,
    userDetails: userLoginReducer,
    getPendingLeaveRequestStore:FetchLeaveRequestsReducer,
    getLeaveRequestStore:FetchLeaveRequestsReducer
}); 

export default allReducers;


