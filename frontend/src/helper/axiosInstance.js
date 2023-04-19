import axios from "axios";

const axiosInstance = axios.create({
  //local host
  baseURL: "http://localhost:5000/v1/",
});

export default axiosInstance;
