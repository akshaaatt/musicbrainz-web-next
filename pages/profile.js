import React, { useCallback, useState, useEffect } from "react";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";
import MainProfile from "../components/Profile/MainProfile";
import { themeSetting } from "../components/Shared/UISettings";

export default function ProfilePage() {
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
      <MainProfile
        theme={theme}
        switchActiveTheme={toggleDarkMode}
        isDarkThemeActive={dark}
      />
        <Footer
            theme={theme}
            projectName="musicbrainz"
            projectDescription="MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public."
            sourceCode="https://github.com/metabrainz/musicbrainz-server"
            logo="/assets/img/meb-logos/MusicBrainz.svg"
            columns={4}
        />
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
