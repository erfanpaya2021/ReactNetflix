import api from "../../app/api";
import { MyResponse } from "../../models";

export const getUpcomingMovies = async () => {
    const res: MyResponse = await api.get(`movie/upcoming`, {
        params: { language: "en-US", page: 2 },
    });
    return res.results;
};
