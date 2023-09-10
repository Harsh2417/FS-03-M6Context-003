import React, {useContext} from 'react';
import {DarkModeContext} from './context/DarkMode';

function Content() {
    const {darkMode} = useContext(DarkModeContext);
    const contentProvider = () => {
        if (darkMode) {
            return <h1>Dark Mode</h1>
        }
        return <h1>Light Mode</h1>
    }
    return (
        <div className={darkMode ? `Content Content-dark` : `Content`}>
           {contentProvider()}
        </div>
    )
}

export default Content

