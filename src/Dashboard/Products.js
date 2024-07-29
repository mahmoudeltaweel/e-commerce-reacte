import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


export default function Products(){

    const[data , setdata]=useState([]);

    useEffect(()=>{
      getAllProduct();
    },[])

    const getAllProduct = ()=>{
      fetch("http://localhost:9000/products")
      .then((res)=>res.json())
      .then((data)=>setdata(data))
  }

    function deleteproduct(item){
      Swal.fire({
        title: `Do you want to Delete the ${item.title}?`,
        // showDenyButton: true,
        confirmButtonText: "Yes",
        showCancelButton: true,
      }).then((result) => {
          if (result.isConfirmed) {        
          fetch(`http://localhost:9000/products/${item.id}`,{
            method:"DELETE"
            }).then((res)=>res.json())
            .then((data)=>
              getAllProduct()
          ) 
          Swal.fire("Delete!", "", "success");
        }
      });


                     }
                     
    let showdata = data.map((item ,index)=>
      <tbody   key={index}>
        <tr>
      <td>{index+1}</td>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
      <td style={{display:"flex" , alignItems:"space-between", justifyContent:"center"}}>
            <Link  to={`update/${item.id}`}>
        <i  
             className="fa-solid fa-pen-to-square" 
             style={{color:"#74afb9" , fontSize:"20px" ,paddingRight:"4px" , cursor:"pointer" }}
             ></i>
             </Link>
            <Link  to={`${item.id}`}>
            <i className="fa-solid fa-eye"  style={{color:"blue" , fontSize:"20px" , cursor:"pointer" }}></i>
             </Link>

               <i 
             className="fa-sharp fa-solid fa-trash" onClick={()=>deleteproduct(item)}
             style={{color:"red" , fontSize:"20px" , cursor:"pointer" }}
             ></i>
 
        </td>
    </tr>
    </tbody>
    )

    return(
        <>
        <h2>products Page</h2>
        <Link to={"add"} className="btn btn-success mt-3">Add New Product</Link>
        <table  className="table" style={{width:"1200px"}}>
  <thead>
    <tr>
      <th scope="col" style={{textAlign:"center"}}>Num</th>
      <th scope="col" style={{textAlign:"center"}}>title</th>
      <th scope="col" style={{textAlign:"center"}}>category</th>
      <th scope="col" style={{textAlign:"center"}}>price</th>
      <th  style={{textAlign:"center" , width:"100px"}}>Action</th>
    </tr>
  </thead>
  
    {showdata}
  
</table>
</>
    )
}