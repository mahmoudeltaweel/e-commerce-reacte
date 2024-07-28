import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Dashboard(){
    return(
        <>
        <div className='row'>
        <div className='col-2 sidebar'>
         <SideBar/>
        </div>
        <div className='col-10'>
        <Outlet />
        </div>
      </div>
      </>
    )
}