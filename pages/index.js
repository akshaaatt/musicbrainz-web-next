import React, {useCallback, useState} from "react";
import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';
import ScrollToTop from "../components/Home/ScrollToTop/ScrollToTop";
import Supporters from "../components/Home/Supporters/Supporters";
import Intro from "../components/Home/Intro/Intro";
import AppDownload from "../components/Home/AppDownload/AppDownload";
import About from "../components/Home/About/About";
import Facts from "../components/Home/Facts/Facts";
import Explore from "../components/Home/Explore/Explore";
import Projects from "../components/Home/Projects/Projects";
import ThemeContext, { DarkMode } from '../components/Utils/Themes/themes';


function Home() {
  const [ dark, setDark ] = useState(DarkMode.getSetting);
  const theme = dark ? "theme-dark" : "theme-light";

  const toggleDarkMode = useCallback(function () {
    setDark(prevState => {
      const newState = !prevState;
      DarkMode.updateSetting(newState);
      return newState;
    });
  }, []);

  return (
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
  );
}

export default Home;