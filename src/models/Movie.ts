export interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    release_date: string;
}

export interface FirebaseMovie {
    id: number;
    title: string;
    img: string;
}
