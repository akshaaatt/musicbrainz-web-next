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
                            <Image src="/assets/img/supporters/google.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/bbc.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/plex.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/lastfm.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/microsoft.png" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/pandora.png" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/hubbard.png" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/Amazon_logo.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/ticketmaster.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/umg.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/siriusxm.jpg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <Image src="/assets/img/supporters/mc.svg" className="img-thumbnail" alt=""/>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
