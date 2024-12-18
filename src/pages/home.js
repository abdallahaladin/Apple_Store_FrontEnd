import React, { useState, useEffect } from "react";
import logo from "../assets/home/main-logo.png"
import product from "../assets/home/product-item1.jpg"
import banner from "../assets/home/banner-image.png"
import sale from "../assets/home/single-image1.png"

import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from "axios";


import  '../css/Home.css'
import { Link } from "react-router-dom"
const Home = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
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
        <header>
            <div class="container">
                <nav class="nav">
                    <div class="logo">
                        <img className="logo" src={logo}/>
                    </div>
                    <div className={`menu1 ${isMenuOpen ? 'open' : ''}`}>
                        <ul> <i className={`fa-solid fa-xmark ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></i>


                            <li><a><Link className="link" to={"/"}>Home</Link></a></li>
                            <li><a src="#">Services</a></li>
                            <li><a src="#">Products</a></li>
                            <li><a src="#">Watches</a></li>
                            <li><a><Link className="link" to={"/AboutUs"}>About Us</Link></a></li>
                            <li><a>Cart</a></li>
                            <li><a>Check Out</a></li>
                            <li><a>Contact</a></li>
                        </ul>   
                    </div>
                    <div class="menu">
                        <ul>
                            <li><a><Link className="link" to={"/"}>Home</Link></a></li>
                            <li><a src="#">Services</a></li>
                            <li><a src="#">Products</a></li>
                            <li><a src="#">Watches</a></li>
                            <li><a><Link className="link" to={"/AboutUs"}>About Us</Link></a></li>
                            <li><a>Cart</a></li>
                            <li><a>Check Out</a></li>
                            <li><a>Contact</a></li>
                        </ul>   
                    </div>
                    <div className="icon">
                    <i className="fa-solid fa-bars bars" onClick={toggleMenu}></i>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <a><Link className="link" to={"/signin"}><i class="fa-solid fa-user"></i></Link></a>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </nav>
            </div>
        </header>
        <section class="main">
            <div class="container">
                <div className="hometitle">
                    <p>YOUR PRODUCTS ARE GREAT</p>
                    <button>
                        <a>Shop Product</a>
                    </button>
                </div>
                <div className="banner">
                    <img className="" src={banner}></img>
                </div>
            </div>
        </section>
        <section className="goal">
                <div class="container">
                <div class="section1">
                    <div class="sub1">
                    <h2> &#9872; QUALITY GUARANTEE</h2>
                    <h4>Consectetur adipi elit lorem ipsum dolor sit amet.</h4>
                    </div>
                    <div class="sub2">
                    <h2> &#9929; FREE DELIVERY</h2>
                    <h4>Dolor sit amet orem ipsu mcons ectetur adipi elit.</h4>
                    </div>
                    <div class="sub3">
                    <h2> &#9950; DAILY OFFERS</h2>
                    <h4>Amet consectetur adipi elit loreme ipsum dolor sit.</h4>
                    </div>
                    <div class="sub4">
                    <h2> &#9960; 100% SECURE PAYMENT</h2>
                    <h4>Rem Lopsum dolor sit amet, consectetur adipi elit.</h4>
                    </div>
                    </div>
                </div>
                </section>
        <section className="products">
            <div className="container">
                <div className="title1">
                    <h1>Mobile Products</h1>
                    <h5><a>Go To Shop</a></h5>
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

                <div className="title1">
                    <h1>Smart Wathes</h1>
                    <h5><a>Go To Shop</a></h5>
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
            </div>
        </section>
        <section className="sale">
            <div className="container">
                <div className="title2">
                        <p>NEW YEAR SALE</p>
                        <button>
                            <a>Shop Sale</a>
                        </button>
                    </div>
                    <div className="sales">
                        <img className="" src={sale}></img>
                    </div>
            </div>
        </section>
        <section className="form">
            <div className="container" placeholder="Your Emaill Adress">
                <form>
                    <div className="leftForm">
                        <h1>SUBSCRIBE US NOW</h1>
                        <p>Get latest news, updates and deals directly mailed to your inbox.</p>                    </div>
                    <div className="email">
                        <input type="email" placeholder="Your email address here" required=""/>
                        <button>Subscripe</button>
                    </div>
                </form>
            </div>
        </section>
        <footer>
            <div className="container">
                
                <div className="left boxsize">
                    <img src={logo}></img>
                    <p>Nisi, purus vitae, ultrices nunc. <br></br>hSit ac sit suscipit endrerit.<br></br> Gravida massa volutpat aenean <br></br>hodio erat nullam fringilla.</p>
                </div>
                <div className="left1 boxsize">
                    <ul><h3>Quick Links</h3>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <div className="right1 boxsize">
                <ul><h3>Help And Info</h3>
                        <li><a>Chechout</a></li>
                        <li><a>Cart</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="right boxsize">
                    <h3>Contact Us</h3>
                    <h4>Do you have any queries or suggestions? </h4>
                    <h4><a href="mailto:">yourinfo@gmail.com</a></h4>
                    <h4>If you need support? Just give us a call. </h4>
                    <h4><a href="">+55 111 222 333 44</a></h4>
                </div>
                
            </div>
            <hr></hr>
            <div className="container">
                
                <div className="footer2">
                    <p>
                        design by team cs309
                    </p>
                </div>
            </div>
        </footer>
            
    </>
    )
}
export default Home

{/* <Link to='/footer'>footer</Link>
        <Link to='/header'>header</Link>  */}