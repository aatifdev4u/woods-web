import { combineReducers } from 'redux';
import appUtilityReducer from './appUtilityReducer';

const rootReducer = combineReducers({
    appUtilityData: appUtilityReducer
});

export default rootReducer;