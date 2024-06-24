import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('http://127.0.0.1:8000/api/user')
                .then(response => {
                    setUser(response.data.data);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    setUser(null);
                });
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            const userResponse = await axios.get('http://127.0.0.1:8000/api/user');
            setUser(userResponse.data.data);
        } catch (error) {
            console.error('Failed to login', error);
        }
    };

    const register = async (name, email, password, password_confirmation) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
                password_confirmation
            });
        } catch (error) {
            console.error('Failed to register', error);
        }
    };

    const logout = async () => {
        try {
            await axios.get('http://127.0.0.1:8000/api/logout');
            localStorage.removeItem('token');
            setUser(null);
            setToken(null);
        } catch (error) {
            console.error('Failed to logout', error);
        }
    };

    const isAuthenticated = () => {
        return !!user;
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
