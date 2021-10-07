import axios from "axios";
const axios_api = axios.create({
  baseURL: process.env.URL,
  // withCredentials: false,
  // config: {},
});
// axios.setHeader("Authorization", "Bearer " + data_token);
// axios_api.defaults.headers.common["Authorization"] ;

export { axios_api };
