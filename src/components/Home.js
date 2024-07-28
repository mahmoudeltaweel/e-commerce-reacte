import { useEffect, useState } from "react"

export default function Home(){
    const[allproduct , setallproduct]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/products")
        .then((res)=>res.json())
        .then((data)=>setallproduct(data))
    },[])
    let showproduct=allproduct.map((item,index)=>
        <div className="col-3" key={index}>
        <div  className="card" style={{width: "100%" , height:"500px"}}>
      <img src={item.image} className="card-img-top" style={{height:"350px" , width:"100%"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">price  ${item.price}</p>
      </div>
    </div>
    </div>
    )
    return(
        <div className="row" style={{margin:"50px"}}>
            {showproduct}
        </div>

    )
}