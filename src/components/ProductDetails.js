import { useEffect, useState } from "react";

export default function ProductDetails(){
    const[productDEtal , setproductDEtal]=useState([])
    const id =window.location.pathname.split( "/" ).slice(-1)[0];
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/2")
        .then((res)=>res.json())
        .then((data)=>setproductDEtal(data[0].title))
    },[])
    console.log(productDEtal);
//     let proudctinfo= productDEtal.map((item , index)=><>
    
//         <div key={index} className="card">
//   <img src={item.image} class="card-img-top" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title">{item.title}</h5>
//     <p className="card-text">{item.description}</p>
//   </div>
// </div>
// </>
    // )
    return(
        <div className="container">
            {productDEtal}
        </div>
    );
}