import Link from 'next/link'
import SearchOverlay from "./SearchOverlay";
import Image from 'next/image';

export default function Header(props) {
  let typeCurrent = "Artist";

  return (
      <>
        <SearchOverlay theme={props.theme}/>
        <nav className={"navbar navbar-default navbar-trans navbar-expand-lg fixed-top " + props.theme}>
          <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span/>
              <span/>
              <span/>
            </button>

            <Link href="/">
              <Image
                  src="/assets/img/meb-logos/musicbrainz.svg"
                  className="image"
                  alt="image"
                  width="180"
                  height="60"
                  layout='fixed'
              />
            </Link>

            <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">English</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item ">Deutsch</a>
                    <a className="dropdown-item ">English</a>
                    <a className="dropdown-item ">Français</a>
                    <a className="dropdown-item ">Italiano</a>
                    <a className="dropdown-item ">Nederlands</a>
                    <a className="dropdown-item ">(Reset Language)</a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" >Help Translate</a>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="https://musicbrainz.org/doc/MusicBrainz_Documentation" target="_blank" rel="noopener noreferrer" className="nav-link " >Docs</a>
                </li>

                <li className="nav-item">
                  <a href="https://musicbrainz.org/doc/MusicBrainz_API" target="_blank" rel="noopener noreferrer" className="nav-link " >API</a>
                </li>

                <li className="nav-item">
                  <a href="https://blog.metabrainz.org" target="_blank" rel="noopener noreferrer" className="nav-link " >Community</a>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Username</a>
                  <div className="dropdown-menu">
                    <Link href="/profile">
                      <a className="dropdown-item ">Profile</a>
                    </Link>
                    <Link href="/register">
                      <a className="dropdown-item ">Register</a>
                    </Link>
                    <Link href="/login">
                      <a className="dropdown-item ">Login</a>
                    </Link>
                    <a className="dropdown-item ">Applications</a>
                    <a className="dropdown-item ">Subscriptions</a>
                    <a className="dropdown-item ">Logout</a>
                  </div>
                </li>
              </ul>

            </div>
            <div className="d-none d-lg-block general-margins">
              <input type="search" name="query" id="searchInputHeader"
                     className={"form-control"}
                     style={{textTransform: "capitalize"}}
                     onKeyPress={event => {
                       if (event.key === "Enter") {
                         const query = document.getElementById('searchInputHeader');
                         console.log(query.value);
                         if(query.value.trim().length<1){
                           return false;
                         }
                         let searchType;
                         typeCurrent = document.getElementById("typeHeader").value;
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
                     onChange={event =>{
                       changeIcon();
                     }}
                     placeholder="Search"/>
            </div>

            <div className="d-none d-lg-block general-margins">
              <select id="typeHeader" name="type" className="form-control">
                <option>Artist</option>
                <option>Release</option>
                <option>Recording</option>
                <option>Label</option>
                <option>Work</option>
                <option>Release Group</option>
                <option>Area</option>
                <option>Place</option>
                <option>Annotation</option>
                <option>CD Stud</option>
                <option>Editor</option>
                <option>Tag</option>
                <option>Instrument</option>
                <option>Series</option>
                <option>Event</option>
                <option>Documentation</option>

              </select>
            </div>
            <button  id='search_button' type="button" onClick={attach} className="btn btn-b-n">
                <Image  alt= "search_logo" src="/assets/img/advance_search.svg" width="22px" height="22px"/>
            </button>

          </div>
        </nav>
      </>
  )
}

const attach = e => {
  e.preventDefault()
  const query = document.getElementById('searchInputHeader');

  if(query.value.length>1){
    let searchType;
    let typeCurrent = document.getElementById("typeHeader").value;
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
    return;
  }
  document.body.classList.add('box-collapse-open')
  document.body.classList.remove('box-collapse-closed')
}

const changeIcon = () =>{
  const query = document.getElementById('searchInputHeader');
  let search_button = document.getElementById('search_button')
  if(query.value.length <= 1){
    search_button.innerHTML = `<Image alt= "search_logo" src="/assets/img/advance_search.svg" width="20px" height="20px" />`
  }
  else{
    search_button.innerHTML = `<Image alt= "search_logo" src="/assets/img/search.svg" width="20px" height="20px" />`
  }
  
}
