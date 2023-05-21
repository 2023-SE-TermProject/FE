import axios from "axios"

axios.interceptors.request.use(
    (request) => {
        request.headers['Authorization'] = "Bearer " + localStorage.getItem("token");
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;