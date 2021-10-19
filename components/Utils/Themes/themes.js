import React from 'react';

const DARK_MODE_KEY = 'dark_mode';

const DarkMode = {
    getSetting: function () {
        try {
            return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true;
        } catch (e) { return false; }
    },

    updateSetting: function (value) {
        try {
            window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true));
        } catch (e) {}
    }
};

export { DarkMode };

export default React.createContext();