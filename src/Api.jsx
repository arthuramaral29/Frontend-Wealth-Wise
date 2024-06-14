import axios from "axios";

const Api = axios.create({
  baseURL: "https://backend-wealth-wise.onrender.com",
});

export default Api;
