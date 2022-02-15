import React from 'react';
import Image from "next/image";

export default function Sidebar(props) {
    return (
        <div className="container-fluid sidebar">
            <div className="row">
                <div className="col-sm-auto bg-light sticky-top">
                    <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                        <Image
                            src="/assets/img/meb-logos/musicbrainz.svg"
                            className="image"
                            alt="image"
                            width="180"
                            height="90"
                            layout='fixed'
                        />
                        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                                   data-bs-placement="right" data-bs-original-title="Home">
                                    <i className="bi-house fs-1"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                                   data-bs-placement="right" data-bs-original-title="Dashboard">
                                    <i className="bi-speedometer2 fs-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                                   data-bs-placement="right" data-bs-original-title="Orders">
                                    <i className="bi-table fs-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                                   data-bs-placement="right" data-bs-original-title="Products">
                                    <i className="bi-heart fs-1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                                   data-bs-placement="right" data-bs-original-title="Customers">
                                    <i className="bi-people fs-1"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <a href="#"
                               className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                               id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi-person-circle h2"></i>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
