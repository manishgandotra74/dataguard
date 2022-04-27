import { Types } from "../types/plugin.types";

const INITIAL_STATE = {
    plugins: {},
    tabs: [],
    filteredPlugins:[],
    status: ''
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
        default:
            return state;
    }
}
export default plugin;
