"use client";

import { createContext, useReducer, useContext, ReactNode } from "react";

// Types from the previous step
interface User {
    _id: string;
    name: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
}

type AuthActionType = 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGOUT';

interface AuthAction {
    type: AuthActionType;
    payload?: {
        user?: User;
        token?: string;
    };
}

const initialState: AuthState = {
    user: typeof window !== "undefined" && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
    token: typeof window !== "undefined" ? localStorage.getItem('token') : null,
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