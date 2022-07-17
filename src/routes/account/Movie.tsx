import React, { FunctionComponent } from "react";

import { FirebaseMovie } from "../../models";

import Close from "../../assets/svg/close.svg";

interface Props {
    movie: FirebaseMovie;
    deleteMovie: (id: number) => void;
}

const Movie: FunctionComponent<Props> = ({ movie, deleteMovie }) => {
    return (
        <div className="relative inline-block cursor-pointer w-[160px] p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
            <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/original/${movie?.img}`}
                alt={movie?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 ">
                <p className="flex items-center justify-center text-center h-full whitespace-normal text-xs md:text-sm font-bold">
                    {movie?.title}
                </p>
                <p
                    onClick={() => deleteMovie(movie?.id)}
                    className="absolute top-4 right-4 w-4"
                >
                    <img src={Close} alt="Close" />
                </p>
            </div>
        </div>
    );
};

export default Movie;
