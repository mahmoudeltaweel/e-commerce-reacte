import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Categories(){

    const[data , setdata]=useState([]);



    useEffect(()=>{
        fetch("http://localhost:9000/categories")
        .then((res)=>res.json())
        .then((data)=>setdata(data))
    },[])

    let showdata = data.map((item ,index)=>
        <>
        <tr  key={index}>
      <td style={{textAlign:"center"}}>{index+1}</td>
      <td style={{textAlign:"center"}}>{item}</td>
    </tr>
    </>
    )

    return(
        <>
        <table  className="table" style={{width:"1200px"}}>
  <thead>
    <tr>
      <th scope="col" style={{textAlign:"center"}}>Num</th>
      <th scope="col" style={{textAlign:"center"}}>category</th>
    </tr>
  </thead>
  <tbody>
    {showdata}
  </tbody>
</table>
</>
    )
}