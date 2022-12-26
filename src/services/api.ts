import axios from "axios";

const makeApi = () => {
  const api = axios.create({
    baseURL: "http://localhost:3001/",
  });

  return api;
};

export default makeApi();
