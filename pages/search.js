import React, { useCallback, useState, useEffect } from "react";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";

import { themeSetting } from "../components/Shared/UISettings";

export default function SearchPage() {
    const [dark, setDark] = useState(themeSetting.setting);
    let theme = dark ? "theme-dark" : "theme-light";

    const toggleDarkMode = useCallback(function () {
        setDark(prevState => {
            const newState = !prevState;
            themeSetting.setting = newState;
            return newState;
        });
    }, []);

    const [queryDetails,setQueryDetails] = useState([{}])

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
            <Header
                theme={theme}
                switchActiveTheme={toggleDarkMode}
                isDarkThemeActive={dark}
            />
            {/* Search portion starts */}
            <div className="searchContainer">
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

                    </div>
                </div>
                <div className="choiceChips">
                    {
                        chipData.map((data) => {
                            if(data.key===0){
                                return <div id={"type"+data.key}
                                            className="chip chip--active"
                                            onClick={() => onChipClick(data.label)}>
                                    {data.label}
                                </div>
                            }
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div id={"type"+data.key}
                                     className="chip"
                                     onClick={() => onChipClick(data.label)}>
                                    {data.label}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="result_table">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col" >S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sort Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Area</th>
                        <th scope="col">Begin</th>
                        <th scope="col">Begin Area</th>
                        <th scope="col">End</th>
                        <th scope="col">End Area</th>
                    </tr>
                    </thead>
                    <tbody>
                    {queryDetails.map((detail,index)=>
                        <tr key={detail.id}>
                            <th scope="row">{index+1}</th>
                            <td >{detail.name} {detail.disambiguation}</td>
                            <td >{detail.sortName}</td>
                            <td >{detail.type}</td>
                            <td >{detail.gender}</td>
                            <td >{detail.area}</td>
                            <td >{detail.begin}</td>
                            <td >{detail.beginArea}</td>
                            <td >{detail.end}</td>
                            <td >{detail.endArea}</td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
            {/* Search Portion ends */}
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
