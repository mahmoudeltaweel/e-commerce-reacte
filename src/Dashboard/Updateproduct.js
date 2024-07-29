import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Updateproduct(){
    const [title, settitle] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
    const navpro=useNavigate();
    let {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:9000/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setprice(data.price)
            settitle(data.title)
            setcategory(data.category)
            setdescription(data.description)
            setimage(data.image)
    })    
    
    },[id])

    async function updateproduct(e){
        e.preventDefault()   
         try{
            fetch(`http://localhost:9000/products/${id}`,{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        title: title,
                        price: price,
                        description: description,
                        image: image,
                        category: category
                    }
                )
            })
                .then(res=>res.json())
                .then((data=>
                    navpro("/dashboard/products")
                ))
        }
        catch(err){
            console.log("err" , err);
        }
      }

    return(
       <>
       <form onSubmit={updateproduct}>
        <label htmlFor="title"  className="form-label">Title</label>
        <input
        className="form-control"
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />


        <label htmlFor="price"  className="form-label">price</label>
        <input
         className="form-control"
          type="text"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          />
        <label htmlFor="description"  className="form-label">description</label>
        <input
         className="form-control"
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          />
        <label htmlFor="category"  className="form-label">category</label>
        <input
         className="form-control"
          type="text"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          />
        <label htmlFor="image"  className="form-label">image</label>
        <input
         className="form-control"
          type="text"
          value={image}
          onChange={(e) => setimage(e.target.value)}
          />
        <div>
            <button type="submit" className="btn btn-info" style={{margin:"20px 50% " ,}}>update</button>
        </div>
      </form>
       </>
    )
}
