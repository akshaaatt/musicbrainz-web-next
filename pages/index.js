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

export default function Home() {
  const DARK_MODE_KEY = 'dark_mode';

  function getSetting() {
      let preference = 'theme-dark';
      try {
          preference = window.localStorage.getItem(DARK_MODE_KEY);
          if (null === preference) {
              if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  preference = 'theme-dark';
              } else {
                  preference = 'theme-light';
              }
          }
          return preference;
      }
      catch (e) {
          console.log(e);
          return preference;
      }
  }
  function updateSetting (value) {
    try {
      window.localStorage.setItem(DARK_MODE_KEY, value);
    } catch (e) {}
  }
  const [ theme, setTheme ] = useState(getSetting);

  const toggleDarkMode = useCallback(function () {
      setTheme(prevState => {
      const newState = !prevState;
      updateSetting(newState);
      return newState;
    });
  }, []);

  return (
      <div>
        <Header theme={theme} switchActiveTheme={toggleDarkMode}/>
        <Intro theme={theme}/>
        <About theme={theme}/>
        <Facts theme={theme}/>
        <Projects theme={theme}/>
        <Explore theme={theme}/>
        <Supporters theme={theme}/>
        <AppDownload theme={theme}/>
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