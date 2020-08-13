import axios from "axios";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  const baseURL =
    "http://asset-dashboard-dev.ap-northeast-2.elasticbeanstalk.com/api/v1";
  const fullURL = `${baseURL}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullURL, { headers });
  } else {
    return axios[method](fullURL, data, { headers });
  }
};

export default {
  getStockCode: () => callApi("get", "/stocks/"),
  createAccount: (form) => callApi("post", "/users/", form),
  login: (form) => callApi("post", "/users/login/", form),
  loadAsset: (id, token) => callApi("get", `/users/${id}/asset/`, null, token),
};
