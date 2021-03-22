/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=25");
  },
  getField: function (field, value) {
    return axios.get("https://randomuser.me/api/?" + field + "=" + value);
  },
};
