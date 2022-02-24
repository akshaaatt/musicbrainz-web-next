import React, {useState, useEffect} from 'react';
export default function Results(props){
    const [queryDetails,setQueryDetails] = useState([{}])
    
    const fetchSearchDetails = async () =>{
        let response = await fetch(`https://musicbrainz.org/ws/2/artist/?fmt=json&query=hello&offset=0`)
        response = await response.json()
        const objectArray =[]
        console.log(response.artists[1]);
        for(let detailsIndex = 0;detailsIndex<response.artists.length;detailsIndex++){
            const object = {};
            object.id =response.artists[detailsIndex].id
            object.name = response.artists[detailsIndex].name 
            object.sortName = response.artists[detailsIndex]['sort-name']
            object.disambiguation = response.artists[detailsIndex].disambiguation ? `( ${response.artists[detailsIndex].disambiguation})`: null 
            object.type = response.artists[detailsIndex].type ? response.artists[detailsIndex].type : null ;
            object.area = response.artists[detailsIndex].area ? response.artists[detailsIndex].area.name : null ;
            object.beginArea = response.artists[detailsIndex]['begin-area'] ? response.artists[detailsIndex]['begin-area'].name : null;
            object.begin = response.artists[detailsIndex]['life-span'] ? response.artists[detailsIndex]['life-span'].begin : null;
            object.end = response.artists[detailsIndex]['life-span'] ? response.artists[detailsIndex]['life-span'].ended : null;
            object.endArea = response.artists[detailsIndex].area? response.artists[detailsIndex].area['life-span'].ended : null;
            
  
            objectArray.push(object)
        }
          console.log(objectArray); 
        
        setQueryDetails(objectArray)
      }
    
    useEffect(()=>{
        fetchSearchDetails()
    },[])
    return(
        <div className={"result_table "+ props.theme}>
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
    )
}
