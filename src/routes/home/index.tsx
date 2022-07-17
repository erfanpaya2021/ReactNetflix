import {
    getUpcomingMovies,
    getTopRatedMovies,
    getPopularMovies,
    getTrendingMovies,
    getHorrorMovies,
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
            <Row title="Horror" asyncFunction={getHorrorMovies} />
        </>
    );
};

export default Home;
