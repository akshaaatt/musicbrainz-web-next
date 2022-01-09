import Image from 'next/image';

export default function Supporters(props) {
    return (
        <section id="supporters" className={"section-with-bg "+ props.theme}>
            <div className="container" data-bs-aos="fade-up">
                <div className="section-header">
                    <h2>Supporters</h2>
                </div>
                <div className="row no-gutters supporters-wrap clearfix" data-bs-aos="zoom-in" data-bs-aos-delay="100">
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/google.svg" className="img-thumbnail" alt="Google" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/bbc.svg" className="img-thumbnail" alt="BBC" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/plex.svg" className="img-thumbnail" alt="Plex" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/lastfm.svg" className="img-thumbnail" alt="LastFM" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/microsoft.svg" className="img-thumbnail" alt="Microsoft" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/pandora.svg" className="img-thumbnail" alt="Pandora" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/acoustid.svg" className="img-thumbnail" alt="Hubbard" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/amazon.svg" className="img-thumbnail" alt="Amazon" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/ticketmaster.svg" className="img-thumbnail" alt="Ticket Master" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/umg.svg" className="img-thumbnail" alt="Umg" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/siriusxm.svg" className="img-thumbnail" alt="SiriusXM" width="141" height="50"/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/mc.svg" className="img-thumbnail" alt="MC" width="141" height="50"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
