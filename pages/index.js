import React, { useCallback, useState } from "react";
import Header from "../components/Shared/Header";
import ScrollToTop from "../components/Shared/ScrollToTop";
import Supporters from "../components/Home/Supporters";
import Intro from "../components/Home/Intro";
import AppDownload from "../components/Home/AppDownload";
import About from "../components/Home/About";
import Facts from "../components/Home/Facts";
import Explore from "../components/Home/Explore";
import Projects from "../components/Home/Projects";
import { themeSetting } from "../components/Shared/UISettings";
import Footer from "../components/Shared/Footer";

export default function Home() {
  const [dark, setDark] = useState(themeSetting.setting);
  let theme = dark ? "theme-dark" : "theme-light";

  const toggleDarkMode = useCallback(function () {
    setDark(prevState => {
      const newState = !prevState;
      themeSetting.setting = newState;
      return newState;
    });
  }, []);

  return (
    <div>
      <Header
        theme={theme}
        switchActiveTheme={toggleDarkMode}
        isDarkThemeActive={dark}
      />
      <Intro theme={theme} />
      <About theme={theme} />
      <Facts theme={theme} />
      <Projects theme={theme} />
      <Explore theme={theme} />
      <Supporters theme={theme} />
      <AppDownload theme={theme} />
      <Footer />
      <ScrollToTop
        icon="bi bi-caret-up-fill"
        backgroundColor="#EB743B"
        position={{ bottom: "12%", right: "0%" }}
        hover={{ backgroundColor: "purple", opacity: "0.95" }}
        margin="24px"
      />
    </div>
  );
}
