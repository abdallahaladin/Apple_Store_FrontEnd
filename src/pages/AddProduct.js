import '../css/DashBoardAdmin.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [name, setProductName] = useState("");
  const [price, setProductPrice] = useState("");
  const [image, setUrl] = useState("");
  const [productAdded, setProductAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/products', {
        name: name,
        price: price,
        image: image,
      });

      console.log("Product added successfully:", response.data);

      setProductAdded(true);

    } catch (error) {
        setProductAdded(false);

      console.error("Error while adding the product:", error);
    }
  };

  return (
    <div className="BackGround">
        
        <aside className="sideBar">
        <div
            className="link">
            <Link className="Links" to={'/'}>DashBoard</Link>
            </div>
            <hr/>
            
            <hr/>
            <div className="link">
            <Link className="Links" to={'editUser'}>Add Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'editProduct'}>Update Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'editProduct'}>Delete Item Product</Link>
            </div>
             {/* {setProductAdded && (
          <p style={{ color: 'white' }}>تمت إضافة المنتج بنجاح!</p>
        )} */}
        </aside>
        <div>

        <form onSubmit={handleSubmit}>
       
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={name}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <label htmlFor="product_price">Product Price:</label>
          <input
            type="text"
            id="product_price"
            name="product_price"
            value={price}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
          <label htmlFor="product_price">Product url:</label>
          <input
            type="text"
            id="product_price"
            name="product_price"
            value={image}
            onChange={(e) => setUrl(e.target.value)}
            required
          />

          <input type="submit" value="Add" />
        </form>
      </div>
      
    </div>
    


  );
};

export default AddProduct;
