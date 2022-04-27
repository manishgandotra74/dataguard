import API from "../apis/plugin.api";
import { Types } from "../types/plugin.types";

// Register
const getPlugins = (type) => {
  return async function (dispatch) {
    try {
      let user = await API.getPlugins_service(type);
      dispatch({ type: Types.FETCHED_PLUGINS_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: { status: 400, message: "Some error occured" } });
    }
  };
}
const getTabs = () => {
  return async function (dispatch) {
    try {
      let user = await API.getTabs_service();
      dispatch({ type: Types.FETCHED_TABS_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: { status: 400, message: "Some error occured" } });
    }
  };
}
const getFilteredPlugins = (filter) => {
  return async function (dispatch) {
    try {
      let user = await API.getFilteredPlugins_service(filter);
      dispatch({ type: Types.FILTERED_FETCHED_PLUGINS_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: { status: 400, message: "Some error occured" } });
    }
  };
}
const updateStatus = (value  ,id) => {
  value.status  = id ? "active":"inactive"

  return async function (dispatch) {
    try {
      let user = await API.update_status_service(value.id, value);
      dispatch({ type: Types.PLUGINS_UPDATED_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: { status: 400, message: "Some error occured" } });
    }
  };
}
export default {
    getTabs,
    getPlugins,
    getFilteredPlugins,
    updateStatus
}