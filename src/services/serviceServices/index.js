import axios from "axios";

// const REACT_APP_BASE_API = process.env.REACT_APP_BASE_API;
const SECONDS = 30;
const MILISECONDS = 1000;
const TIMEOUT = SECONDS * MILISECONDS;


const client = axios.create({
    baseURL: "http://google-apps.co.in/ag_diagnostics/api/",
    timeout: TIMEOUT,
    headers: {
        "content-type": "application/json",
    }
});

client.interceptors.request.use(function (config) {
    return config;
});

client.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
)

const service = async () => {
    const { data } = await client.get(`test`);
    return data;
}

export {
    service
};