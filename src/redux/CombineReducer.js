import { combineReducers } from "redux";
import stored_data from './Reducer';

const combineReducer = combineReducers({
    allData: stored_data
})

export default combineReducer;