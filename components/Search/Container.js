import React from 'react';

export default function Container(props){

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

    return(
        <div className={"searchContainer " + props.theme}>
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
    )
}
