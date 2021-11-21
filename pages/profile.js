import React, {useCallback, useState} from "react";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import ScrollToTop from "../components/Utils/ScrollToTop/ScrollToTop";
import MainProfile from "../components/Profile/MainProfile";

export default function ProfilePage() {
    const DARK_MODE_KEY = 'dark_mode';
    const [ dark, setDark ] = useState(getSetting);
    let theme = dark ? "theme-dark" : "theme-light";

    function getSetting () {
        try {
            return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true;
        } catch (e) {
            return false;
        }
    }

    function updateSetting (value) {
        try {
            window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true));
        } catch (e) {}
    }

    const toggleDarkMode = useCallback(function () {
        setDark(prevState => {
            const newState = !prevState;
            updateSetting(prevState);
            return newState;
        });
    }, []);

    return (
        <div>
            <Header theme={theme}/>
            <MainProfile theme={theme} switchActiveTheme={toggleDarkMode} isDarkThemeActive={dark}/>
            <Footer theme={theme}/>
            <ScrollToTop
                icon="bi bi-caret-up-fill"
                backgroundColor = "#EB743B"
                position={{ bottom: "12%", right: "0%" }}
                hover={{ backgroundColor: "purple", opacity: "0.95" }}
                margin="24px"
            />
        </div>
    );
}
