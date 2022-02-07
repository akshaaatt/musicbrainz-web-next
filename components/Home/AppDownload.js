import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGooglePlay, faAndroid} from '@fortawesome/free-brands-svg-icons';

const AppDownload = props => {
    return (
        <section className={"section download-section text-center "+ props.theme}>
            <div className="container">
                <div className="row">
                    <h2 className="col-md-6 btn-lg">
                        Download our app
                    </h2>
                    <div className="col-md-6">
                        <a
                            className="btn btn-dark btn-lg"
                            href="https://play.google.com/store/apps/details?id=org.metabrainz.android"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faGooglePlay}
                                size="lg"
                            />
                            {' '}
                            Google Play
                        </a>
                        <a
                            className="btn btn-dark btn-lg"
                            href="https://f-droid.org/en/packages/org.metabrainz.android/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faAndroid}
                                size="lg"
                            />
                            {' '}
                            F-Droid
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
