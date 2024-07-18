"use client";
import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';


const SwitchTheme = () => {
    const { theme, mode, toggleTheme, changeTheme } = useTheme();

    return (
        <div className='flex items-center justify-center gap-1 '>

            <label>
                <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </label>
            <br />
            <select name="cars" onChange={changeTheme}>
                <option data-mode={mode} selected={mode === "primary"} value="primary">Primary</option>
                <option data-mode={mode} selected={mode === "green"} value="green">Green</option>
                <option data-mode={mode} selected={mode === "bluepink"} value="bluepink">Blue Pink</option>
            </select>
        </div>
    )
}

export default SwitchTheme