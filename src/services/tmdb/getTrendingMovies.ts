import api from "../../app/api";
import { MyResponse } from "../../models";

export const getTrendingMovies = async () => {
    const res: MyResponse = await api.get(`movie/popular`, {
        params: { language: "en-US", page: 1 },
    });
    return res.results;
};
