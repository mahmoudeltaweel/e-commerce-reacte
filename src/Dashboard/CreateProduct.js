import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const navadd=useNavigate();

  async function addproduct(e){
    e.preventDefault()   
     try{
        axios.post('http://localhost:9000/products/',{
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                })
                navadd("/dashboard/products")
    }
    catch(err){
        console.log("err" , err);
    }
  }

 

  return (
    <>
      <h1>add product</h1>
      <form onSubmit={addproduct}>
        <label htmlFor="title"  className="form-label">Title</label>
        <input
        className="form-control"
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        ></input>


        <label htmlFor="price"  className="form-label">price</label>
        <input
         className="form-control"
          type="text"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        ></input>
        <label htmlFor="description"  className="form-label">description</label>
        <input
         className="form-control"
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></input>
        <label htmlFor="category"  className="form-label">category</label>
        <input
         className="form-control"
          type="text"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        ></input>
        <label htmlFor="image"  className="form-label">image</label>
        <input
         className="form-control"
          type="text"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        ></input>
        <div>
            <button type="submit" className="btn btn-info" style={{margin:"20px 50% " ,}}>submit</button>
        </div>
      </form>
    </>
  );
}
