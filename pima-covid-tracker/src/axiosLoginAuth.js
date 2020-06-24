import axios from "axios";

const axiosLoginAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://covid-tracker-be.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};

export default axiosLoginAuth;