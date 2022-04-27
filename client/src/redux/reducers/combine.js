import { combineReducers } from "redux";
 
import pluginReducers from "./plugin.reducers";
 
const combine = combineReducers({
  plugin: pluginReducers,
});
 
export default combine;