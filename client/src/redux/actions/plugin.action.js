import API from "../apis/plugin.api";
import { Types } from "../types/plugin.types";

 /*
    Get All Plugins
  */
const getPlugins = (type) => {
  return async function (dispatch) {
    try {
      let user = await API.getPlugins_service(type);
      dispatch({ type: Types.FETCHED_PLUGINS_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: null });
    }
  };
}
 /*
    Get All Tabs
  */
const getTabs = () => {
  return async function (dispatch) {
    try {
      let user = await API.getTabs_service();
      dispatch({ type: Types.FETCHED_TABS_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: null });
    }
  };
}
 /*
    Get Filtered Plugins
  */
const getFilteredPlugins = (filter) => {
  return async function (dispatch) {
    try {
      let user = await API.getFilteredPlugins_service(filter);
      dispatch({ type: Types.FILTERED_FETCHED_PLUGINS_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: null });
    }
  };
}
 /*
    Update Status of Plugin
  */
const updateStatus = (value  ,id) => {
  value.status  = id ? "active":"inactive"

  return async function (dispatch) {
    try {
      let user = await API.update_status_service(value.id, value);
      dispatch({ type: Types.PLUGINS_UPDATED_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: null });
    }
  };
}
 /*
    Get Overall Status of Plugins
  */
const pluginStatus = () => {

  return async function (dispatch) {
    try {
      let user = await API.plugin_status_service();
      dispatch({ type: Types.PLUGIN_STATUS_FETCHED_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: null });
    }
  };
}
 /*
    Update Overall Status of Plugins
  */
const updatePluginStatus = (status ) => {
const value = {
  "enabled": status
}
  return async function (dispatch) {
    try {
      let user = await API.update_plugin_status_service( value);
      dispatch({ type: Types.PLUGIN_STATUS_UPDATED_SUCCESSFULLY, payload: user });

    } catch (err) {
      dispatch({ type: Types.SERVER_ERROR, payload: null });
    }
  };
}
export default {
    getTabs,
    getPlugins,
    getFilteredPlugins,
    updateStatus,
    pluginStatus,
    updatePluginStatus
}