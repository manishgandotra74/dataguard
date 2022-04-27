import { Types } from "../types/plugin.types";

const INITIAL_STATE = {
    plugins: {},
    tabs: [],
    filteredPlugins: [],
    status: '',
    pluginStatus: true,
    allpluginStatus: true
};
const plugin = (state = INITIAL_STATE, { type, payload } = {}) => {

    switch (type) {
        case Types.FETCHED_PLUGINS_SUCCESSFULLY:
            return {
                ...state,
                plugins: payload,
            };
        case Types.FETCHED_TABS_SUCCESSFULLY:
            return {
                ...state,
                tabs: payload,
            };
        case Types.FILTERED_FETCHED_PLUGINS_SUCCESSFULLY:
            return {
                ...state,
                filteredPlugins: payload,
            };
        case Types.PLUGINS_UPDATED_SUCCESSFULLY:
            return {
                ...state,
                status: payload,
            };
        case Types.PLUGIN_STATUS_UPDATED_SUCCESSFULLY:
            return {
                ...state,
                pluginStatus: payload?.enabled,
            };
        case Types.PLUGIN_STATUS_FETCHED_SUCCESSFULLY:
            return {
                ...state,
                allpluginStatus: payload?.enabled,
            };
        default:
            return state;
    }
}
export default plugin;
