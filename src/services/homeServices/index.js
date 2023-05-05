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

const banner = async () => {
  const { data } = await client.get(`banner`);
  return data;
};

const city = async () => {
  const { data } = await client.get(`city`);
  return data;
};

const packages = async (formData) => {
  const { data } = await client.post(`selected-packages`, formData);
  return data;
};

const testimonial = async () => {
  const { data } = await client.get(`testimonial`);
  return data;
};

export { banner, city, packages, testimonial };
