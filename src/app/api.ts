import axios from "axios";
import queryString from "query-string";

const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: import.meta.env.VITE_APP_MOVIE_DB_API_KEY,
};

const api = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: params =>
        queryString.stringify({
            ...params,
            api_key: apiConfig.apiKey,
        }),
});

api.interceptors.request.use(async config => config);

api.interceptors.response.use(
    response => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    error => {
        throw error;
    },
);

export default api;
