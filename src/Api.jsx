import axios from "axios";

const Api = axios.create({
  baseURL: "http://192.168.0.152:3333",
});

export default Api;
