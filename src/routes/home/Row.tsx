import React, { FunctionComponent, useRef, MutableRefObject } from "react";
import { useQuery } from "react-query";

import { Movie as MovieType } from "../../models";

import Movie from "./Movie";

import ChevronRight from "../../assets/svg/chevron-right.svg";
import ChevronLeft from "../../assets/svg/chevron-left.svg";

interface Props {
    title: string;
    asyncFunction: () => Promise<MovieType[]>;
}

const Row: FunctionComponent<Props> = ({ title, asyncFunction }) => {
    const { data } = useQuery(title, asyncFunction);
    const SliderRef = useRef() as MutableRefObject<HTMLDivElement>;

    const slideLeft = () => {
        SliderRef.current.scrollLeft = SliderRef.current.scrollLeft - 500;
        console.log("ran");
    };
    const slideRight = () => {
        SliderRef.current.scrollLeft = SliderRef.current.scrollLeft + 500;
        console.log("ran r");
    };

    return (
        <>
            <h3 className="font-bold md:text-xl p-4">{title}</h3>
            <div className="relative flex items-center group">
                <img
                    onClick={slideLeft}
                    className="hidden absolute z-40 top-[50%] translate-y-[-50%] left-4 cursor-pointer group-hover:flex items-center justify-center w-12 rounded-full shadow-lg bg-white/60 text-black/60 "
                    src={ChevronLeft}
                    alt="ChevronLeft"
                />
                <div
                    ref={SliderRef}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                    {data?.map(movie => (
                        <Movie movie={movie} key={movie.id} />
                    ))}
                </div>
                <img
                    onClick={slideRight}
                    className="hidden absolute z-10 top-[50%] translate-y-[-50%] right-4 cursor-pointer group-hover:flex items-center justify-center w-12 rounded-full shadow-lg bg-white/60 text-black/60 "
                    src={ChevronRight}
                    alt="ChevronRight"
                />
            </div>
        </>
    );
};

export default Row;
