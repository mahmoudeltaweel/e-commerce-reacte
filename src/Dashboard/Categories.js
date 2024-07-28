import { useEffect } from "react"
// import { Link } from "react-router-dom";

export default function Categories(){

    // const[data , setdata]=useState([]);
    // const[rundelte , setrundelte]=useState([]);



    useEffect(()=>{
        fetch("http://localhost:9000/products/category")
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    },[])

    // let showdata = data.map((item ,index)=>
    //     <>
    //     <tr  key={index}>
    //   <td>{index+1}</td>
    //   <td>{item.title}</td>
    //   <td>{item.category}</td>
    //   <td>{item.price}</td>
    // </tr>
    // </>
    // )

    return(
        <>
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
  <tbody>
    {/* {showdata} */}
  </tbody>
</table>
</>
    )
}