import { Link } from "react-router-dom";

export default function SideBar(){
    return(
        <>
            <ul>
                <li>
                    <Link to="/dashboard/products">All Products</Link>
                </li>
                
                <li>
                <Link to="/dashboard/category">All Categories</Link>

                </li>
            </ul>
        </>
    )
}