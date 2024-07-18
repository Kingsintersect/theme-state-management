"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemeContextType = {
    theme: string;
    mode: string;
    toggleTheme: () => void;
    changeTheme: (e: any) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>('light');
    const [mode, setMode] = useState<string>('primary');

    // useEffect(() => {
    //     const storedTheme = localStorage.getItem('theme') || 'light';
    //     setTheme(storedTheme);
    //     document.documentElement.setAttribute('data-theme', storedTheme);
    // }, []);

    useEffect(() => {
        const fetchTheme = async () => {
            const response = await fetch('/api/theme');
            const data = await response.json();
            setTheme(data.theme);
            setMode(data.mode);
            document.documentElement.setAttribute('data-theme', data.theme);
            document.body.setAttribute('data-theme', data.theme);
            document.documentElement.setAttribute('data-mode', data.mode);
            document.body.setAttribute('data-mode', data.mode);
        };

        fetchTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = (theme === 'light') ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);

        // localStorage.setItem('theme', newTheme);

        await fetch('/api/theme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ theme: newTheme }),
        });
    };
    const changeTheme = async (e: any) => {
        console.log(e.target.value)
        const newMode = e.target.value
        setMode(newMode);
        document.documentElement.setAttribute('data-mode', newMode);
        document.body.setAttribute('data-mode', newMode);

        // localStorage.setItem('theme', newTheme);

        await fetch('/api/theme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mode: newMode }),
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
