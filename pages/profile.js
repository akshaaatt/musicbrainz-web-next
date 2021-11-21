import React, {useCallback, useState} from "react";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import ScrollToTop from "../components/Utils/ScrollToTop/ScrollToTop";
import MainProfile from "../components/Profile/MainProfile";
import {themeSetting} from "../components/Utils/Common";

export default function ProfilePage() {
    const [ dark, setDark ] = useState(themeSetting.setting);
    let theme = dark ? "theme-light" : "theme-dark";

    const toggleDarkMode = useCallback(function () {
        setDark(prevState => {
            const newState = !prevState;
            themeSetting.setting = prevState;
            return newState;
        });
    }, []);

    return (
        <div>
            <Header theme={theme} switchActiveTheme={toggleDarkMode} isDarkThemeActive={dark}/>
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
