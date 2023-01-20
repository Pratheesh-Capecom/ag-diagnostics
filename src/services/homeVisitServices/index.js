import axios from "axios";

// const REACT_APP_BASE_API = process.env.REACT_APP_BASE_API;
const SECONDS = 30;
const MILISECONDS = 1000;
const TIMEOUT = SECONDS * MILISECONDS;

const client = axios.create({
  baseURL: "https://admin.agdiagnostics.com/api/",
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

const homeVisitPackageDropDown = async (formdata) => {
  const { data } = await client.post(`home-visit-package-list`, formdata);
  return data;
};

const homeVisit = async (formdata) => {
  const { data } = await client.post(`home-visit`, formdata);
  return data;
};

const homeAreaList = async () => {
  const { data } = await client.get(`home-visit-area`);
  return data;
};


export { homeVisitPackageDropDown, homeVisit, homeAreaList };
