import {
    getUpcomingMovies,
    getTopRatedMovies,
    getPopularMovies,
    getTrendingMovies,
    getByQuery,
} from "../../services";

import Hero from "./Hero";
import Row from "./Row";

const Home = () => {
    return (
        <>
            <Hero />
            <Row title="Upcoming" asyncFunction={getUpcomingMovies} />
            <Row title="Trending" asyncFunction={getTrendingMovies} />
            <Row title="Top Rated" asyncFunction={getTopRatedMovies} />
            <Row title="Popular" asyncFunction={getPopularMovies} />
            <Row title="Action" asyncFunction={() => getByQuery("action")} />
            <Row title="Horror" asyncFunction={() => getByQuery("horror")} />
        </>
    );
};

export default Home;
