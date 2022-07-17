import { AxiosResponse } from "axios";
import type { Movie } from "./Movie";

export interface MyResponse extends AxiosResponse {
    results: Movie[];
}
