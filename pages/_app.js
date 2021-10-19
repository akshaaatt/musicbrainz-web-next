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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                      crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet"/>

            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
