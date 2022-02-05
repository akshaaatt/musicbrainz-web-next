export default function AppDownload(props) {
    return(
        <section className={"section cta-section "+props.theme}>
            <div className="container">
                <div className="row center-p">
                    <div className="col-md-6">
                        <h2>Download our app</h2>
                    </div>
                    <div className="col-md-6">
                        <a href="https://play.google.com/store/apps/details?id=org.metabrainz.android"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn d-inline-flex align-items-center">
                            <i className="fab fa-google-play"/>
                            Google play
                        </a>
                        <a href="https://f-droid.org/en/packages/org.metabrainz.android/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn d-inline-flex align-items-center">
                            <i className="fab fa-android"/>
                            F-Droid
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
