import React, {useCallback, useState} from "react";
import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';
import ScrollToTop from "../components/Utils/ScrollToTop/ScrollToTop";
import Supporters from "../components/Home/Supporters/Supporters";
import Intro from "../components/Home/Intro/Intro";
import AppDownload from "../components/Home/AppDownload/AppDownload";
import About from "../components/Home/About/About";
import Facts from "../components/Home/Facts/Facts";
import Explore from "../components/Home/Explore/Explore";
import Projects from "../components/Home/Projects/Projects";

function Home() {
  const DARK_MODE_KEY = 'dark_mode';

  function getSetting() {
    try {
      return window.localStorage.getItem(DARK_MODE_KEY) === true;
    } catch (e) { return false; }
  }
  function updateSetting (value) {
    try {
      window.localStorage.setItem(DARK_MODE_KEY, value);
    } catch (e) {}
  }
  const [ dark, setDark ] = useState(getSetting);

  const toggleDarkMode = useCallback(function () {
    setDark(prevState => {
      const newState = !prevState;
      updateSetting(newState);
      return newState;
    });
  }, []);

  return (
      <div>
        <Header isDarkThemeActive={dark} switchActiveTheme={toggleDarkMode}/>
        <Intro isDarkThemeActive={dark}/>
        <About isDarkThemeActive={dark}/>
        <Facts isDarkThemeActive={dark}/>
        <Projects isDarkThemeActive={dark}/>
        <Explore isDarkThemeActive={dark}/>
        <Supporters isDarkThemeActive={dark}/>
        <AppDownload isDarkThemeActive={dark}/>
        <Footer isDarkThemeActive={dark} />
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

export default Home;