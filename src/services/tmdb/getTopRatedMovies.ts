import api from "../../app/api";
import { MyResponse } from "../../models";

export const getTopRatedMovies = async () => {
    const res: MyResponse = await api.get(`movie/top_rated`, {
        params: { language: "en-US", page: 1 },
    });
    return res.results;
};
