import React, { useMemo } from "react";
import { useQuery } from "react-query";

import { getTrendingMovies } from "../../services";
import { originalImage, truncateString } from "../../utils";

const Hero = () => {
    const { data, isLoading } = useQuery("test", getTrendingMovies);

    const movie = useMemo(
        () => data && data[Math.floor(Math.random() * data?.length)],
        [data],
    );
    const movieImage = originalImage(movie?.backdrop_path || "");

    if (isLoading) {
        return <></>;
    }

    return (
        <div className="w-full h-[550px]">
            <div className="w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src={movieImage}
                    alt={movie?.title}
                />
                <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-r from-black/80"></div>
            </div>
            <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h2 className="font-bold text-3xl md:text-5xl">
                    {movie?.title}
                </h2>
                <div className="my-4 space-x-4">
                    <button className="py-2 px-6 bg-white text-gray-600">
                        Play
                    </button>
                    <button className="py-2 px-6 text-white border border-white">
                        Watch Later
                    </button>
                </div>
                <p className="text-sm text-gray-400">
                    Released:{movie?.release_date}
                </p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] text-gray-200">
                    {truncateString(movie?.overview || "", 150)}
                </p>
            </div>
        </div>
    );
};

export default Hero;
