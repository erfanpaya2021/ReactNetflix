import React, {
    createContext,
    FunctionComponent,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../app/firebase";

interface ContextInterface {
    user: User | null;
    singUp: (email: string, password: string) => void;
    logIn: (email: string, password: string) => void;
    logOut: () => void;
}

const initialValue = {
    user: null,
    singUp: (email: string, password: string) => {},
    logIn: (email: string, password: string) => {},
    logOut: () => {},
};

const AuthContext = createContext<ContextInterface>(initialValue);

export const AuthContextProvider: FunctionComponent<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const singUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, "users", email), { savedMovies: [] });
    };
    const logIn = (email: string, password: string) =>
        signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    });

    return (
        <AuthContext.Provider value={{ user, singUp, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
