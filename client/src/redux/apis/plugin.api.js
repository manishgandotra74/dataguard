import axios from 'axios'
const JSON_URL = 'http://localhost:5000/'
const getPlugins_service = async (type) => {
  return axios.get(`${JSON_URL}tabdata?path=${type}`)
    .then((response) => {
      return response?.data?.[0]
    })
    .catch((reason) => {
      if (reason.response) {
        return reason.response
      }
    })
};
const getTabs_service = async () => {
  return axios.get(`${JSON_URL}tabdata`)
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      if (reason.response) {
        return reason.response
      }
    })
};
const getFilteredPlugins_service = async (filter) => {
  return axios.get(`${JSON_URL}plugins?${filter}`)
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      if (reason.response) {
        return reason.response
      }
    })
};
const update_status_service = async (id, data) => {
  return axios.put(`${JSON_URL}plugins/${id}`, data)
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      if (reason.response) {
        return reason.response
      }
    })
};
const plugin_status_service = async () => {
  return axios.get(`${JSON_URL}plugin_status`)
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      if (reason.response) {
        return reason.response
      }
    })
};
const update_plugin_status_service = async (data) => {
  return axios.put(`${JSON_URL}plugin_status`, data)
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      if (reason.response) {
        return reason.response
      }
    })
};
export default {
  getPlugins_service,
  getTabs_service,
  getFilteredPlugins_service,
  update_status_service,
  plugin_status_service,
  update_plugin_status_service
};
