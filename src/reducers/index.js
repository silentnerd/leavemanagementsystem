import {combineReducers} from 'redux';
import CollapseSideBarReducer from './reducer-aside-toggle';
import FetchCancelLeaveRequestsReducer from './reducer-fetchCRL';
import FetchLeaveRequests from './leave-reducer'

const allReducers = combineReducers({
    isCollapsed: CollapseSideBarReducer,
    getCancelLeaveRequests: FetchCancelLeaveRequestsReducer,
    getPendingLeaveRequestStore:FetchLeaveRequests
}); 

export default allReducers;


