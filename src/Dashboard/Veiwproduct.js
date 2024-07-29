import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Veiwproduct(){
    let {id} = useParams();
    const[dataproduct , setdataproduct]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>setdataproduct(data))
    },[id])
    
    return(
        <>
        <div className="card" style={{width: "500px" , height:"500px" , margin:"auto" , marginTop:"50px "}}>
      <img src={dataproduct.image} className="card-img-top" style={{height:"350px" , width:"450px"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{dataproduct.title}</h5>
        <p className="card-text">price  ${dataproduct.price}</p>
      </div>
    </div>
        </>
    )
}