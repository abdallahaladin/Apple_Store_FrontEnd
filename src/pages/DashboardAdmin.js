import React from "react";
import '../css/DashBoardAdmin.css';
import { Link } from "react-router-dom";
const DashboardAdmin=()=>{
    return(
        <div className="BackGround">
        <aside className="sideBar">
            <div
            className="link">
            <Link className="Links" to={'/'}>DashBoard</Link>
            </div>
            <hr/>
            
            <hr/>
            <div className="link">
            <Link className="Links" to={'addproduct'}>Add Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'editproduct'}>Update Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'deleteproduct'}>Delete Item Product</Link>
            </div>
        </aside>
        </div>
    )
}
export default DashboardAdmin;