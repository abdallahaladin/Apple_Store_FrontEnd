import React, { useState, useEffect } from "react";
import '../css/DashBoardAdmin.css';
import { Link } from "react-router-dom";
import axios from "axios";

const DeleteProduct=()=>{
    const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      // Make a DELETE request to your API endpoint with the specified product ID
      await axios.delete(`/api/v1/products/${id}`);
      console.log("Product deleted successfully!");

      // You can add redirection to another page or perform additional actions here
    } catch (error) {
      console.error("Error while deleting the product:", error);
    }
  };
    return(
        <div className="BackGround">
          <form onSubmit={handleDelete}>

<label htmlFor="product_id">Product ID:</label>
<input
  type="text"
  id="product_id"
  name="product_id"
  value={id}
  onChange={(e) => setId(e.target.value)}
  required
/>
        <input type="submit" value="Delete" />

</form>
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

export default DeleteProduct;