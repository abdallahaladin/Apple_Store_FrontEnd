import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const [id, setId] = useState("");
  const [name, setProductName] = useState("");
  const [price, setProductPrice] = useState("");
  const [image, setUrl] = useState("");
  const [product, setProduct] = useState(null);

  // Fetch product data based on the provided ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/v1/products/${id}`, {
        name: name,
        price: price,
        image: image,
      });

      console.log("Product updated successfully:", response.data);

      // You can add redirection to another page or perform additional actions here
    } catch (error) {
      console.error("Error while updating the product:", error);
    }
  };

  return (
    <div className="BackGround">
      <aside className="sideBar">
            <div
            className="link">
            <Link className="Links" to={'/admin'}>DashBoard</Link>
            </div>
            <hr/>
            
            <hr/>
            <div className="link">
            <Link className="Links" to={'/addproduct'}>Add Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'/editproduct'}>Update Item Product</Link>
            </div>
            <hr/>
            <div className="link">
            <Link className="Links" to={'/deleteproduct'}>Delete Item Product</Link>
            </div>
        </aside>

      <form onSubmit={handleSubmit}>
        <label htmlFor="product_id">Product ID:</label>
        <input
          type="text"
          id="product_id"
          name="product_id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        {product && (
          <>
            <label htmlFor="product_name">Product Name:</label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              value={name || product.name}
              onChange={(e) => setProductName(e.target.value)}
              required
            />

            <label htmlFor="product_price">Product Price:</label>
            <input
              type="text"
              id="product_price"
              name="product_price"
              value={price || product.price}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />

            <label htmlFor="product_url">Product URL:</label>
            <input
              type="text"
              id="product_url"
              name="product_url"
              value={image || product.image}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </>
        )}

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditProduct;
