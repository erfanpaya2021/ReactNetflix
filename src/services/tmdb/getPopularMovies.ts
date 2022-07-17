import api from "../../app/api";
import { MyResponse } from "../../models";

export const getPopularMovies = async () => {
    const res: MyResponse = await api.get(`movie/popular`, {
        params: { language: "en-US", page: 2 },
    });
    return res.results;
};
