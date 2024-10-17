import { combineReducers } from "redux";
import Todoreducer from "./Todoreducer";

const rootReduser = combineReducers({
    todo : Todoreducer
})
export default rootReduser