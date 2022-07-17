import React, { FunctionComponent, useEffect, useState } from "react";
import {
    arrayUnion,
    doc,
    DocumentData,
    getDoc,
    onSnapshot,
    updateDoc,
} from "firebase/firestore";

import { useAuth } from "../../context/AuthContext";
import { db } from "../../app/firebase";
import type { Movie as MovieType, FirebaseMovie } from "../../models";
import { w500Image } from "../../utils";

import HeartOutline from "../../assets/svg/heart-outline.svg";
import HeartSolid from "../../assets/svg/heart-solid.svg";

interface Props {
    movie: MovieType;
}

const Movie: FunctionComponent<Props> = ({ movie }) => {
    const { user } = useAuth();
    const [saved, setSaved] = useState<boolean>(false);

    const movieDocRef = doc(db, "users", `${user?.email}`);

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), doc => {
            const m: FirebaseMovie[] = doc.data()?.savedMovies || [];
            m.forEach(i => {
                if (i.id === movie.id) {
                    setSaved(true);
                }
            });
        });
    }, [user?.email]);

    const saveMovie = async () => {
        if (user?.email) {
            setSaved(true);
            await updateDoc(movieDocRef, {
                savedMovies: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path,
                }),
            });
        } else {
            alert("Please log in to save a movie!");
        }
    };

    return (
        <div className="relative inline-block cursor-pointer w-[160px] p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
            <img
                className="w-full h-auto block"
                src={w500Image(movie.backdrop_path)}
                alt={movie.title}
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 ">
                <p className="flex items-center justify-center text-center h-full whitespace-normal text-xs md:text-sm font-bold">
                    {movie?.title}
                </p>
                <p onClick={saveMovie}>
                    <img
                        className="absolute top-4 left-4 w-4"
                        src={saved ? HeartSolid : HeartOutline}
                        alt="heart"
                    />
                </p>
            </div>
        </div>
    );
};

export default Movie;
