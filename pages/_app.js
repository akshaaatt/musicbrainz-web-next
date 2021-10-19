import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css" ;
import "react-multi-carousel/lib/styles.css";
import '../styles/globals.css';
import '../styles/About.css';
import '../styles/AppDownload.css';
import '../styles/Explore.css';
import '../styles/Facts.css';
import '../styles/Intro.css';
import '../styles/SearchOverlay.css';
import '../styles/Header.css';
import '../styles/ThemeSwitchButton.css';
import '../styles/Supporters.css';
import '../styles/Projects.css';
import '../styles/Footer.css';
import '../styles/FAQs.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>

                <link rel="icon" href="%PUBLIC_URL%/assets/favicons/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/assets/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32"
                      href="%PUBLIC_URL%/assets/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16"
                      href="%PUBLIC_URL%/assets/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="%PUBLIC_URL%/assets/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="%PUBLIC_URL%/assets/favicons/safari-pinned-tab.svg"
                      color="#5bbad5"/>
                <link rel="stylesheet"
                      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                      crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
                      rel="stylesheet"/>

                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>

                <meta name="viewport"
                      content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />

                <title>MusicBrainz - The Open Music Encyclopedia</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
