import api from "../../app/api";
import { MyResponse } from "../../models";

export const getHorrorMovies = async () => {
    const res: MyResponse = await api.get(`search/movie`, {
        params: {
            query: "horror",
            language: "en-US",
            page: 1,
            include_adult: false,
        },
    });
    return res.results;
};
