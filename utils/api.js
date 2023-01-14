import axios from "axios";
import nookies from "nookies";
import config from "../config";

const apiWithToken = (token) => {
  return axios.create({
    baseURL: config.baseUrl,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token || nookies.get("token")}`,
    },
  });
};

const apiWithoutToken = () => {
  return axios.create({
    baseURL: config.baseUrl,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

const apiUpload = () => {
  return axios.create({
    baseURL: config.baseUrl,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const apiUploadWithToken = (token) => {
  return axios.create({
    baseURL: config.baseUrl,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token || nookies.get("token")}`,
    },
  });
};

export { apiWithToken, apiWithoutToken, apiUpload, apiUploadWithToken };
