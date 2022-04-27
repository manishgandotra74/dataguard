import axios from 'axios'

const getPlugins_service = async (type) => {
  return axios.get(`http://localhost:5000/tabdata?path=${type}`)
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
  return axios.get(`http://localhost:5000/tabdata`)
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
  return axios.get(`http://localhost:5000/plugins?${filter}`)
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
  return axios.put(`http://localhost:5000/plugins/${id}`, data)
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
  update_status_service
};
