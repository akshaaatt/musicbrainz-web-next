import React, {useCallback, useState} from "react";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import ScrollToTop from "../components/Utils/ScrollToTop/ScrollToTop";
import Register from "../components/Account/Register";

export default function RegisterPage() {
    const DARK_MODE_KEY = 'dark_mode';
    const [ dark ] = useState(getSetting);
    let theme = dark ? "theme-dark" : "theme-light";

    function getSetting () {
        try {
            return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true;
        } catch (e) {
            return false;
        }
    }

    return (
        <div>
            <Header theme={theme}/>
            <Register theme={theme}/>
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
