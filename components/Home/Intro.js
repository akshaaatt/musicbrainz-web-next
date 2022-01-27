import React from "react";
import Carousel from "react-multi-carousel";
import dynamic from 'next/dynamic';
import {Modal} from "react-bootstrap";
import Image from 'next/image';
import Blog from "./Blog";

const BarcodeScanner = dynamic(
    () => import('../Shared/BarcodeScanner'),
    { ssr: false }
)

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default class Intro extends React.Component {

    state = {
        additionalTransform: 0,
        posts: [],
        data: "Actively looking for a barcode...",
        show: false,
    };
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }

    componentDidMount() {
        fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
            .then(response => response.json())
            .then(res => {
                this.setState({ posts: res.feed.entry });
            });
    }

    render() {
        const chipData = [
            {key: 0, label: 'Artist'},
            {key: 1, label: 'Release'},
            {key: 2, label: 'Recording'},
            {key: 3, label: 'Label'},
            {key: 4, label: 'Work'},
            {key: 5, label: 'Release Group'},
            {key: 6, label: 'Area'},
            {key: 7, label: 'Place'},
            {key: 8, label: 'Annotation'},
            {key: 9, label: 'CD Stud'},
            {key: 10, label: 'Editor'},
            {key: 11, label: 'Tag'},
            {key: 12, label: 'Instrument'},
            {key: 13, label: 'Series'},
            {key: 14, label: 'Event'},
            {key: 15, label: 'Documentation'},
        ];

        let typeCurrent = "Artist";

        function onChipClick(type) {
            const indexPrev = chipData.map(e => e.label).indexOf(typeCurrent);
            const elementPrev = document.getElementById("type"+indexPrev);
            elementPrev.className = "chip";

            typeCurrent = type;

            const indexNew = chipData.map(e => e.label).indexOf(type);
            const elementNew = document.getElementById("type"+indexNew);
            elementNew.className = "chip chip--active";
        }

        function searchButtonClick() {
            const query = document.getElementById('searchInputMain');
            console.log(query.value);
            if(query.value.trim().length<1){
                return;
            }
            let searchType;
            if(typeCurrent==='CD Stub'){
                searchType = "cdstub";
            }
            else if(typeCurrent === "Documentation"){
                searchType = "doc";
            }
            else{
                searchType = typeCurrent.replace(' ','_').toLowerCase()
            }
            window.open("https://musicbrainz.org/"+"search?type=" + searchType + "&query=" +query.value, "_newTab");
        }


        return (
            <div>
                <section id="intro" className={"intro d-flex align-items-center "+this.props.theme}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 d-flex flex-column justify-content-center">
                                <h1 data-bs-aos="fade-up" style={{marginTop: "20px"}}>The Music Database</h1>
                                <h2 data-bs-aos="fade-up" data-bs-aos-delay="400" >
                                    World&apos;s Biggest Open Source Music Database
                                </h2>

                                <div className="row search-margins">
                                    <div className="col-8 col-md-10">
                                        <input type="search" name="query"
                                               id="searchInputMain"
                                               className={"form-control special-font"}
                                               style={{textTransform: "capitalize"}}
                                               onKeyPress={event => {
                                                   if (event.key === "Enter") {
                                                       const query = document.getElementById('searchInputMain');
                                                       console.log(query.value);
                                                       if(query.value.trim().length<1){
                                                           return false;
                                                       }
                                                       let searchType;
                                                       if(typeCurrent==='CD Stud'){
                                                           searchType = "cdstub";
                                                       }
                                                       else if(typeCurrent === "Documentation"){
                                                           searchType = "doc";
                                                       }
                                                       else{
                                                           searchType = typeCurrent.replace(' ','_').toLowerCase()
                                                       }
                                                       window.open("https://musicbrainz.org/"+"search?type=" + searchType + "&query=" +query.value, "_newTab");
                                                       return false;
                                                   }
                                               }}
                                               placeholder="Search 41,054,421 Entities"/>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <button type="button" className="btn btn-b-n" onClick={searchButtonClick}>
                                            <i className="fab fa-searchengin"/>
                                        </button>
                                        <button type="button" className="btn btn-b-n" onClick={this.handleShow}>
                                            <i className="bi bi-upc-scan"/>
                                        </button>

                                        <Modal show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Scan Barcode</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <BarcodeScanner
                                                    onUpdate={(err, result) => {
                                                        if (result)  {
                                                            if(result.getText() !== this.state.data) {
                                                                window.open("https://musicbrainz.org/search?advanced=1&type=release&query=barcode%3A" + result.getText(), "_newTab");
                                                            }
                                                            this.setState({ data: result.getText() });
                                                        }
                                                        else {
                                                            this.setState({ data: "Actively looking for a barcode..." });
                                                        }
                                                    }}
                                                    height="100%"
                                                    width="100%"
                                                />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <p>{this.state.data}</p>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="choiceChips">
                                    {
                                        chipData.map((data) => {
                                            if(data.key===0){
                                                return <div id={"type"+data.key} className="chip chip--active" onClick={() => onChipClick(data.label)}>{data.label}</div>
                                            }
                                            return (
                                                // eslint-disable-next-line react/jsx-key
                                                <div id={"type"+data.key} className="chip" onClick={() => onChipClick(data.label)}>{data.label}</div>
                                            );
                                        })
                                    }
                                </div>
                                <Carousel
                                    ssr={false}
                                    ref={el => (this.Carousel = el)}
                                    partialVisbile={false}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={6000}
                                    itemClass="slider-image-item"
                                    responsive={responsive}
                                    containerClass="carousel-container-with-scrollbar"
                                    additionalTransform={-this.state.additionalTransform}
                                    beforeChange={nextSlide => {
                                        if (nextSlide !== 0 && this.state.additionalTransform !== 150) {
                                            this.setState({additionalTransform: 150});
                                        }
                                        if (nextSlide === 0 && this.state.additionalTransform === 150) {
                                            this.setState({additionalTransform: 0});
                                        }
                                    }}
                                >
                                    {
                                        this.state.posts ? this.state.posts.map((artwork, index) => {
                                            console.log(artwork["im:image"][2].label);
                                            return (
                                                <div className="card text-left mt-5" key={index}>
                                                    <Image width="275" height="250" src={artwork["im:image"][2].label} alt="Cover Art"/>
                                                </div>
                                            )
                                        }) :
                                            <div className="card text-left mt-5" key="1">
                                                <Image width="256" height="256" src="/assets/img/demo.jpg" alt="Cover Art"/>
                                            </div>
                                    }
                                </Carousel>
                            </div>
                            <div className={"col-lg-3 d-none d-lg-block"}>
                                <Blog/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
