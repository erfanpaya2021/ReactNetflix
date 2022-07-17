import api from "../../app/api";
import { MyResponse } from "../../models";

export const getByQuery = async (query: string) => {
    const res: MyResponse = await api.get(`search/movie`, {
        params: {
            query,
            language: "en-US",
            page: 1,
            include_adult: false,
        },
    });
    return res.results;
};
