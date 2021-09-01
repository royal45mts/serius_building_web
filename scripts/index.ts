import axios from "axios";
const axios_api = axios.create({
  baseURL: "http://sikapapi.sundareka.com/api",
  withCredentials: false,
  // config: {},
});
// axios.setHeader("Authorization", "Bearer " + data_token);
// axios_api.defaults.headers.common["Authorization"] ;

export { axios_api };
