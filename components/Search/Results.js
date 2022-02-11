import React, {useState} from 'react';
export default function Results(props){
    const [queryDetails,setQueryDetails] = useState([{}])

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
