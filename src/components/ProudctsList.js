import { useEffect, useState } from "react";
import Proudct from "./Proudct";

export default function ProductList() {
const[products,setproducts]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setproducts(data))
    },[])

  return (
    <div>
      <h2 style={{textAlign: "center"}}> Our Proudcts </h2>
      <div className="container">
      <div className="row" >
            {
                products.map((item,index)=>{
                    return(
                        <div className="col-3" key={index}>
                            <Proudct product= {item} />
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}
