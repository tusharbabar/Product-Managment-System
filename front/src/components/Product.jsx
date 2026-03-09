import React, { Component } from "react";
import { Link } from "react-router-dom";
import { 
  Truck, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Users, 
  ShoppingBag, 
  Award, 
  Star, 
  MapPin,
  Phone,
  Heart,
  Mail,
  ArrowRight
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../style/custom.css";
class Product extends Component {
  render() {
    const products = [
      {
        id: 1, title: "Men's T-Shirt", price: "₹499",
        image: "https://image.hm.com/assets/hm/e4/89/e48924ece823f919263814643ee0aa14e5557bee.jpg?imwidth=1080", link: "/men",
      }, {
        id: 2, title: "Women's Kurti", price: "₹899",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz-RSdLBBFnNDMG-MxzpEDGD3FKOnwm84L2cTRroHLbjz48fzihCJzLfmuF2F9L3KQYrj5jH8jmFE8fE7RBooTt1645PCHPcTVTFEG3yY", link: "/women",
      },
      { id: 3, title: "Dairy Milk", price: "₹699", image: " https://images.apollo247.in/pub/media/catalog/product/c/a/cad0090_1_1.jpg", link: "/groery", },
      { id: 4, title: "Nivea", price: "₹1,299", image: "https://i.pinimg.com/1200x/c2/22/ed/c222edef9cf29998b232c1ebd254a159.jpg", link: "/beauty", },
    ];
    const productsnew = [

      {
        id: 1,
        title: "Wireless Earbuds",
        price: "₹1,499",
        image:
          "https://i.pinimg.com/736x/0f/e9/2d/0fe92da5cd71f99d06f5c5831a39832f.jpg",
        link: "/electronic  ",
      },
      {
        id: 2,
        title: "Women's Handbag",
        price: "₹1,199",
        image:
          "https://t4.ftcdn.net/jpg/01/10/04/51/240_F_110045173_QgmA3gg5OwTlLNQBqmPdFnkh6sPvsvt8.jpg",
        link: "/women",
      },
      {
        id: 3,
        title: "Men's Sneakers",
        price: "₹2,299",
        image:
          "https://i.pinimg.com/736x/0b/bf/cd/0bbfcdf036a7787b551ae85f31a35606.jpg",
        link: "/men",
      },
      {
        id: 4,
        title: "Smart Watch",
        price: "₹1,999",
        image:
          "https://i.pinimg.com/736x/3b/7a/25/3b7a25b829711e5e20a697f55eb76f48.jpg",
        link: "/electronic",
      },
      {
        id: 5,
        title: "Kids Toy Car",
        price: "₹799",
        image:
          "https://i.pinimg.com/736x/43/5e/d1/435ed17a6971e98065c85d69f02549bd.jpg",
        link: "/electronic",
      },
      {
        id: 6,
        title: "Nivea",
        price: "₹499",
        image:
          "https://i.pinimg.com/1200x/c2/22/ed/c222edef9cf29998b232c1ebd254a159.jpg",
        link: "/beauty",
      }
    ];

    const testimonials = [
      { name: "Rahul Sharma", role: "Verified Buyer", text: "Amazing service and high-quality products. The recommendations are spot on!", avatar: "https://i.pravatar.cc/150?u=rahul" },
      { name: "Priya Patel", role: "Fashion Enthusiast", text: "I found exactly what I was looking for. The delivery was incredibly fast!", avatar: "https://i.pravatar.cc/150?u=priya" },
      { name: "Ankit Verma", role: "Tech Geek", text: "Best platform for electronics. Great deals and authentic products.", avatar: "https://i.pravatar.cc/150?u=ankit" },
    ];

    return (
      <div className="home-wrapper">
        <div className="container">
          {/* Hero Section */}
          <div className="hero-banner-two d-flex flex-column-reverse flex-md-row align-items-center">
            <div className="hero-text animate__animated animate__fadeInLeft">
              <span className="hero-subtitle">Smart Shopping Starts Here</span>
              <h1>
                Find Products You Love <br /> With Smart Recommendations
              </h1>
              <p>
                Explore trending items, personalized suggestions, and the latest
                deals curated just for you. Discover fashion, electronics, beauty,
                and more – all in one place.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold">Shop Now</button>
                <button
                  className="btn btn-outline-secondary rounded-pill px-4 py-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHero"
                >
                  Learn More
                </button>
              </div>
              <div className="collapse" id="collapseHero">
                <div className="card card-body text-dark mt-3 glass-card">
                  Our Product Recommender System helps you discover the right
                  items effortlessly. From fashion and electronics to groceries
                  and beauty.
                </div>
              </div>
            </div>
            <div className="hero-image animate__animated animate__fadeInRight">
              <img
                src="https://media.istockphoto.com/id/1304746031/photo/taking-better-control-with-technology.jpg?s=612x612&w=0&k=20&c=ds9pkcoioo5RXc28dB81IzIQfsRnFKYKTvfUiapYBqY="
                alt="Shopping"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="row my-5 g-4">
            <div className="col-md-3">
              <div className="feature-box">
                <div className="feature-icon"><Truck /></div>
                <h5 className="fw-bold">Free Shipping</h5>
                <p className="small text-muted mb-0">On all orders over ₹999</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-box">
                <div className="feature-icon"><ShieldCheck /></div>
                <h5 className="fw-bold">Secure Payment</h5>
                <p className="small text-muted mb-0">100% secure checkouts</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-box">
                <div className="feature-icon"><Zap /></div>
                <h5 className="fw-bold">Instant Deals</h5>
                <p className="small text-muted mb-0">Daily flash sales & offers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-box">
                <div className="feature-icon"><Headphones /></div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="small text-muted mb-0">Dedicated assistance</p>
              </div>
            </div>
          </div>

          <h2 className="section-title mt-5"> Our Products</h2>
          <div className="row mt-4 g-4 justify-content-center">
            {products.map((product) => (
              <div className="col-12 col-sm-6 col-lg-3 mb-4" key={product.id}>
                <div className="card h-100 glass-card animate__animated animate__fadeIn">
                  <div className="wishlist-btn">
                    <Heart size={18} />
                  </div>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.price}
                    </p>
                    <Link to={product.link} className="btn btn-primary w-100">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*  Advertising Banner Section */}
          <div className="advertising-banner my-5">
            <div className="row align-items-center bg-white p-5 rounded-4 shadow-lg animate__animated animate__fadeInUp border">
              <div className="col-md-6 text-center">
                <img
                  src="https://t3.ftcdn.net/jpg/04/87/16/16/240_F_487161671_VrCEimVcrhtWjq7btJwhslxFVIPt7pyx.jpg"
                  alt="Big Discount"
                  className="img-fluid rounded-4 shadow-sm"
                />
              </div>
              <div className="col-md-6 ps-md-5">
                <span className="badge bg-danger rounded-pill px-3 py-2 mb-3">Flash Sale</span>
                <h2 className="fw-bold display-6 mb-3">Big Billion Days Are Here! </h2>
                <p className="text-secondary fs-5 mb-4">
                  Grab exclusive offers on fashion, electronics, home essentials & more.
                  Hurry up, deals end soon!
                </p>
                <Link to="/offer" className="btn btn-danger btn-lg rounded-pill px-5 py-3 shadow animate__animated animate__pulse animate__infinite">
                  Shop Deals Now <ArrowRight className="ms-2" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="section-title mt-5">Featured Offers</h2>
          <div className="row mt-3 g-4">
            {productsnew.slice(0, 4).map((product) => (
              <div className="col-12 col-sm-6 col-lg-3 mb-4" key={`ad-${product.id}`}>
                <div className="card h-100 glass-card animate__animated animate__fadeInUp">
                  <div className="wishlist-btn">
                    <Heart size={18} />
                  </div>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="card-text m-0">{product.price}</span>
                      <div className="text-warning small d-flex gap-1">
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                      </div>
                    </div>
                    <Link to={product.link} className="btn btn-outline-primary w-100">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="row my-5 g-4">
            <div className="col-md-3">
              <div className="stat-card">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Happy Users</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <span className="stat-number">120K+</span>
                <span className="stat-label">Products Sold</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">Retail Hubs</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <span className="stat-number">4.8</span>
                <span className="stat-label">App Rating</span>
              </div>
            </div>
          </div>

          {/*  Sale Banner */}
          <div className="sale-banner my-5 animate__animated animate__fadeInUp">
            <div className="sale-content">
              <h2> End of Season Sale</h2>
              <p className="fs-5 opacity-90 mb-4">Up to 50% off on selected items across all categories</p>
              <button
                className="btn btn-light rounded-pill px-5 py-2 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSale"
              >
                Reveal Deals
              </button>
              <div className="collapse" id="collapseSale">
                <div className="card card-body text-dark mt-3 glass-card mx-auto" style={{maxWidth: '600px'}}>
                  Our End of Season Sale is here! Enjoy exclusive discounts of up
                  to 50% on a wide range of selected items. Don’t miss out—these
                  deals are available for a limited time only.
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <h2 className="section-title mt-5">What Our Customers Say</h2>
          <div className="my-5">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-5"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-card">
                    <div className="d-flex align-items-center mb-3">
                      <img src={t.avatar} alt={t.name} className="user-avatar" />
                      <div>
                        <h6 className="mb-0 fw-bold">{t.name}</h6>
                        <small className="text-muted">{t.role}</small>
                      </div>
                    </div>
                    <p className="text-secondary italic">"{t.text}"</p>
                    <div className="text-warning small mt-2">
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Newsletter Section */}
          <div className="newsletter-section my-5">
            <Mail size={48} className="mb-4 opacity-50" />
            <h2 className="fw-bold mb-3">Don't Miss Out on Exclusive Offers!</h2>
            <p className="fs-5 opacity-75 mb-5">Subscribe to our newsletter and get first access to sales and new arrivals.</p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
              />
              <button className="btn btn-dark rounded-pill px-5 fw-bold">
                Subscribe
              </button>
            </div>
          </div>

          {/*  About Section */}
          <div className="about-section pb-5 border-bottom flex-column flex-md-row text-center text-md-start">
            <div className="about-image">
              <img
                src=" https://media.istockphoto.com/id/1171032733/photo/asian-women-tourists-she-is-excited-to-travel-in-the-studio.jpg?s=612x612&w=0&k=20&c=v1EtvJFFwhaOF89Mt44nwr0eMCKBqU5zIslAgy4a6qM="
                alt="About Us"
                className="shadow-lg"
              />
            </div>
            <div className="about-text p-md-5">
              <span className="section-subtitle">About Our System</span>
              <p className="lead text-secondary"> Our Product Recommender System is designed to simplify your shopping experience. Whether you're searching for fashion, electronics, groceries, or daily essentials.</p>
              <p className="text-muted"> By analyzing preferences and trending items, we ensure that you always find the right products at the right time, saving both your effort and time while shopping. </p>
              <Link to="/about" className="btn btn-primary rounded-pill px-5 py-2"> Learn More </Link>
            </div>
          </div>
        </div>

        {/*  Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-container">
              <div className="footer-section">
                <span className="footer-brand">QuikCart.</span>
                <p className="mb-4">
                  Elevate your lifestyle with our curated essentials. 
                  Experience the pinnacle of smart shopping with personalized 
                  recommendations and elite service.
                </p>
                <div className="social-links">
                  <Link to="#" className="social-circle"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#" className="social-circle"><i className="fab fa-twitter"></i></Link>
                  <Link to="#" className="social-circle"><i className="fab fa-instagram"></i></Link>
                  <Link to="#" className="social-circle"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>

              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/about">Our Story</Link></li>
                  <li><Link to="/men">New Arrivals</Link></li>
                  <li><Link to="/gallery">Product Gallery</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Customer Care</h3>
                <ul>
                  <li><Link to="/terms">Shipping Info</Link></li>
                  <li><Link to="/terms">Returns & Exchanges</Link></li>
                  <li><Link to="/terms">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Service</Link></li>
                </ul>
              </div>

              <div className="footer-section footer-contact">
                <h3>Contact Info</h3>
                <p><MapPin size={18} /> Pune, Maharashtra, India</p>
                <p><Phone size={18} /> +91 9529647719</p>
                <p><Mail size={18} /> contact@quikcart.com</p>
                <div className="mt-4">
                  <h6 className="text-white fw-bold mb-3 small">DOWNLOAD OUR APP</h6>
                  <div className="d-flex gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="30" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} QuikCart. Designed for the modern era. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Product;



