

import React, { useContext } from 'react';
import { DarkModeContext } from './context/DarkMode';

function Lightswitch() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <div className="Lightswitch">
            <button onClick={handleClick}>
                {darkMode ? "Turn On" : "Turn Off"}
            </button>
        </div>
    )
}

export default Lightswitch;
