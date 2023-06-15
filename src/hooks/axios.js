import axios from "axios"
{/* 
This code utilizes an Axios interceptor to add the token to the authorization header for all requests.
 This ensures that the user's token is sent along with the requests to the backend, enabling authentication.
*/}
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