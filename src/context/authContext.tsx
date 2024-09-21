"use client";

import { UserType } from "@/lib/type";
import { createContext, useReducer, useContext, ReactNode, useEffect, useState } from "react";

interface AuthState {
    user: UserType | null;
    token: string | null;
}

type AuthActionType = 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGOUT';

interface AuthAction {
    type: AuthActionType;
    payload?: {
        user?: UserType;
        token?: string | null;
    };
}

const initialState: AuthState = {
    user: null,
    token: null,
};

const AuthContext = createContext<{ state: AuthState; dispatch: React.Dispatch<AuthAction> } | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                token: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload?.user || null,
                token: action.payload?.token || null,
            };
        case 'LOGOUT':
            return {
                user: null,
                token: null,
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if (storedUser) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    user: JSON.parse(storedUser),
                    token: storedToken,
                },
            });
        }

        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null;
    }

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
