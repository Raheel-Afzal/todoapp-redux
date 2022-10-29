import { combineReducers } from "redux";
import addFieldReducer from "./addFieldReducer";
import handleDataReducer from "./handleDataReducer";

const reducer = combineReducers({
     addFieldReducer,
     handleDataReducer
     
})
export default reducer;