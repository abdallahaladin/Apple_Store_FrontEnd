import React, { useState, useEffect } from "react";
import '../css/Shop.css';
import product1 from "../assets/AboutUs/product-item1.jpg"
import Mlwany1 from "../assets/AboutUs/insta-item1.jpg"
import Mlwany2 from "../assets/AboutUs/insta-item2.jpg"
import Mlwany3 from "../assets/AboutUs/insta-item3.jpg"
import Mlwany4 from "../assets/AboutUs/insta-item4.jpg"
import Mlwany5 from "../assets/AboutUs/insta-item5.jpg"
import axios from "axios";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Shop =()=>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('/api/v1/products'); // Update with your API endpoint
            setProducts(response.data.data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);

    return(
        <>
        <div class="head">
         <div class="header">
            <div class="title">
            <h1>SHOP</h1>
            <h6><a>Home </a> &#62;  Shop </h6>
            </div>
        </div>
        <div class="Section1">
            <h2> Showing 1-9 of 55 results</h2>
            
        </div>
        <div class="Section2">
            <div class="search">
                <input type="text" placeholder="Search"></input>
                <button>Search</button>
            </div>
            <ul class="catigores">
            <lh><a>CATEGORIES</a></lh>
            <li><a>All</a></li>
            <li><a>Phones</a></li>
            <li><a>Accessories</a></li>
            <li><a>Tablets</a></li>
            <li><a>Watches</a></li>
            </ul> <ul class="TAGS">
            <lh><a>TAGS</a></lh>
            <li><a>White</a></li>
            <li><a>Cheap</a></li>
            <li><a>Mobile</a></li>
            <li><a>Modern</a></li>
            </ul><ul class="BRANDS">
            <lh><a>BRANDS</a></lh>
            <li><a>Apple</a></li>
            <li><a>Samsung</a></li>
            <li><a>Huwai</a></li>
            </ul><ul class="FILTER_BY_PRICE">
            <lh><a>FILTER BY PRICE</a></lh>
            <li><a>Less Than 10$</a></li>
            <li><a>10$-20%</a></li>
            <li><a>20$-30$</a></li>
            <li><a>30$-40$</a></li>
            <li><a>40$-50$</a></li>
            </ul>

        </div>
        
        </div>
        <div className="flexproduct">
                {products.map((product, index) => (
            <div key={index} className="producti">
              <img src={product.image} alt={`Product ${index}`} />
              <h3>
                {product.name} <span>{product.price}</span>
              </h3>
            </div>
                      ))}

        </div>
        <section class="form">
            <div class="container" placeholder="Your Emaill Adress">
                <form>
                    <div className="leftForm">
                        <h1>SUBSCRIBE US NOW</h1>
                        <p>Get latest news, updates and deals directly mailed to your inbox.</p>                    </div>
                    <div className="email">
                        <input type="email"/>
                        <button>Subscripe</button>
                    </div>
                </form>
            </div>
        </section>
            <div class="section4">
            <h1>Shop Our Insta</h1>
            <div class="sub1"><a><img src={Mlwany1}/></a></div>
            <div class="sub2"><a><img src={Mlwany2}/></a></div>
            <div class="sub3"><a><img src={Mlwany3}/></a></div>
            <div class="sub4"><a><img src={Mlwany4}/></a></div>
            <div class="sub5"><a><img src={Mlwany5}/></a></div>
            </div>
        
        
        </>
    );
}
export default Shop;