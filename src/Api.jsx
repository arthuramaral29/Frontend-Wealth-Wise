import axios from "axios";

const Api = axios.create({
  baseURL: "https://backend-wealth-wise.vercel.app",
});

export default Api;
