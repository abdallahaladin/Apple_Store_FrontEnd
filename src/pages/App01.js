import image from '../assets/AboutUs/single-image3.jpg';
import image1 from "../assets/AboutUs/insta-item1.jpg";
import image2 from "../assets/AboutUs/insta-item2.jpg";
import image3 from "../assets/AboutUs/insta-item3.jpg";
import image4 from "../assets/AboutUs/insta-item4.jpg";
import image5 from "../assets/AboutUs/insta-item5.jpg";
import logo from "../assets/home/main-logo.png"
import '../css/App01.css';

function Contact01() {
  return (
    <>
    <div className='container'>
        
      <div className='headApp01'>
        <div className='text'>
        <h2>Contact</h2>
        <p>Home &gt; Contact</p>
        </div>
      </div>

      <div className='sec2Contact'>
        <h2>CONTACT INFO</h2>
        <p className='title'>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p> 
           <div className='leftSecContact'>
            <div className='firstSecContact'>
            <h3>OFFICE</h3>
            <p className='AddressContact'>730 Glenstone Ave 65802, Springfield, US</p>
            <p className='phoneContact'>+123 987 321</p>
            <p className='phoneContact'>+123 123 654</p>
            <p className='phoneContact'>ministore@yourinfo.com</p>
            </div>
            <div className='secondSecContact'>
            <h3>MANAGEMENT</h3>
            <p className='AddressContact'>730 Glenstone Ave 65802, Springfield, US</p>
            <p className='phoneContact'>+123 987 321</p>
            <p className='phoneContact'>+123 123 654</p>
            <p className='phoneContact'>ministore@yourinfo.com</p>
            </div>
          </div> 
           <div className='rightSecContact'>
          <h2 >ANY QUESTIONS?</h2>
          <p className='title'>Use the form below to get in touch with us.</p>
          <input className='firstLineContact' type='text' placeholder='Write Your Name Here'/>
          <input className='firstLineContact' type='Email' placeholder='Write Your Email Here'/>
          <input className='PhoneNumberContact' type='number' placeholder='Phone Number'/>
          <input className='SubjectContact' type='text' placeholder='Write Your Subject Here'/>
          <input className='MessageContact' type='text' placeholder='Write Your Message Here'/>
          <button className='SubmitContact'>Submit</button>
          </div>
      </div>
         <div className='sec3Contact'>
          <div className='img'>
          <img src={image}/>
          </div> 
          <div className='ParagContact'>
            <h2>OUR STORES</h2>
            <p className='titleContact'>You can also directly buy products from our stores.</p>

            <div className='firstSecContact'>
              <h3>OFFICE</h3>
              <p className='AddressContact'>730 Glenstone Ave 65802, Springfield, US</p>
              <p className='phoneContact'>+123 987 321</p>
              <p className='phoneContact'>+123 123 654</p>
              <p className='phoneContact'>ministore@yourinfo.com</p>
              </div>
              <div className='secondSecContact'>
              <h3>USA</h3>
              <p className='AddressContact'>730 Glenstone Ave 65802, Springfield, US</p>
              <p className='phoneContact'>+123 987 321</p>
              <p className='phoneContact'>+123 123 654</p>
              <p className='phoneContact'>ministore@yourinfo.com</p>
              </div>
          </div>
        </div>
        <section class="formContact">
            <div class="container" placeholder="Your Emaill Adress">
                <form>
                    <div className="leftForm">
                        <h1>SUBSCRIBE US NOW</h1>
                        <p>Get latest news, updates and deals directly mailed to your inbox.</p>    </div>
                    <div className="email">
                        <input type="email"/>
                        <button>Subscripe</button>
                    </div>
                </form>
            </div>
        </section>
            <div class="section4Contact">
            <h1>Shop Our Insta</h1>
            <div class="sub1"><a><img src={image1}/></a></div>
            <div class="sub2"><a><img src={image2}/></a></div>
            <div class="sub3"><a><img src={image3}/></a></div>
            <div class="sub4"><a><img src={image4}/></a></div>
            <div class="sub5"><a><img src={image5}/></a></div>
            </div>

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
            </div>
            

    </>
  );
}

export default Contact01;
