import React, { MutableRefObject, useRef, useState, useEffect } from "react";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

import { useAuth } from "../../context/AuthContext";
import { db } from "../../app/firebase";
import { FirebaseMovie } from "../../models";
import Movie from "./Movie";

import ChevronRight from "../../assets/svg/chevron-right.svg";
import ChevronLeft from "../../assets/svg/chevron-left.svg";

const SavedMovies = () => {
    const [movies, setMovies] = useState<FirebaseMovie[]>([]);
    const { user } = useAuth();
    const SliderRef = useRef() as MutableRefObject<HTMLDivElement>;

    const movieRef = doc(db, "users", `${user?.email}`);

    const deleteMovie = async (id: number) => {
        try {
            const result = movies.filter(item => item.id !== id);
            await updateDoc(movieRef, {
                savedMovies: result,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), doc => {
            setMovies(doc.data()?.savedMovies);
        });
    }, [user?.email]);

    const slideLeft = () => {
        SliderRef.current.scrollLeft = SliderRef.current.scrollLeft - 500;
    };
    const slideRight = () => {
        SliderRef.current.scrollLeft = SliderRef.current.scrollLeft + 500;
    };

    return (
        <>
            <h3 className="font-bold md:text-xl p-4">Movies</h3>
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
                    {movies?.map(movie => (
                        <Movie
                            movie={movie}
                            deleteMovie={deleteMovie}
                            key={movie.id}
                        />
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

export default SavedMovies;
