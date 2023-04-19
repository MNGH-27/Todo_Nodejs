import axiosInstance from "../helper/axiosInstance";

const AxiosInstance = () => {
  axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (err) {
      return err;
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (!error.response) {
      } else if (error.response.status === 500) {
        // console.log("process : ", window.location.href);
      }
      //check status code with backend to handler it
      else if (error.response.status === 400) {
        return error.response;
      }
      //check status code with backend if user has token
      else if (error.response.status === 401) {
        return error.response;
      }

      return error.response;
    }
  );
  return axiosInstance;
};

export default AxiosInstance;
