import axios from "axios";

// const REACT_APP_BASE_API = process.env.REACT_APP_BASE_API;
const SECONDS = 30;
const MILISECONDS = 1000;
const TIMEOUT = SECONDS * MILISECONDS;

const client = axios.create({
  baseURL: "https://pixel-studios.net/admin-ag-diagnostics/api/",
  timeout: TIMEOUT,
  headers: {
    "content-type": "application/json",
  },
});

client.interceptors.request.use(function (config) {
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const packages = async (formData) => {
  const { data } = await client.post(`packages`, formData);
  return data;
};

const packageId = async (id) => {
  const { data } = await client.get(`package-detail/${id}`);
  return data;
};

const enquiry = async (formData) => {
  const { data } = await client.post(`package`, formData);
  return data;
};

export { packages, enquiry, packageId };
