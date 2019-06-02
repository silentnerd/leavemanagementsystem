import {combineReducers} from 'redux';
import CollapseSideBarReducer from './reducer-aside-toggle';
import FetchCancelLeaveRequestsReducer from './reducer-fetchCRL';
import FetchLeaveRequestsReducer from './leave-reducer'

const allReducers = combineReducers({
    isCollapsed: CollapseSideBarReducer,
    getCancelLeaveRequests: FetchCancelLeaveRequestsReducer,
    getPendingLeaveRequestStore:FetchLeaveRequestsReducer,
    getLeaveRequestStore:FetchLeaveRequestsReducer
}); 

export default allReducers;


