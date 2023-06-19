import React, { useEffect } from "react";



import './MegaMenu.scss'
const MegaMenu = () => {


  return (
    <div className="mega-menu-parent">
      <nav>
        <div className="wrapper">
          <div className="logo"></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          {/* <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times" />
            </label>
            {
              categories && categories.map(category => {
                return (
                  <li>
                    <a href="#">{category.name}</a>
                    {
                      category.subcategories.length > 0 ? <>
                        <input type="checkbox" id="showMega" />
                        <label htmlFor="showMega" className="mobile-item">
                          Mega Menu
                        </label>
                        <div className="mega-box">
                          <div className="content">
                            {
                              category.subcategories.map((cat, index) => {
                                return (
                                  <div className="row">
                                    <header>{cat.name}</header>
                                    {
                                      cat.subcategories.length > 0 && <ul className="mega-links">
                                        {
                                          cat.subcategories.map((subCat) => {
                                            return (
                                              <li>
                                                <a href="#">{subCat.name}</a>
                                              </li>
                                            )
                                          })
                                        }

                                        <li>
                                          <a href="#">Website Design</a>
                                        </li>
                                        <li>
                                          <a href="#">App Development</a>
                                        </li>
                                        <li>
                                          <a href="#">Custom Logo</a>
                                        </li>
                                      </ul>
                                    }

                                  </div>
                                )
                              })
                            }

                          </div>
                        </div>
                      </> : null
                    }
                  </li>
                )
              })
            }



            <li>
              <a href="#" />
              <a href="#">Fashion</a>
            </li>


            <li>
              <a href="#" className="desktop-item">
                Sporting Goods
              </a>

            </li>
            <li>
              <a href="#">Other Categories</a>
            </li>
          </ul> */}
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times" />
            </label>
            <li>
            <img src="./images/vehicles.png.png" alt="" />
              <a href="#">Vehicles</a>
            </li>
            <li>
            <img src="./images/real-estate.png.png" alt="" />
              <a href="#">Property</a>
            </li>
            <li>
            <img src="./images/mobile.png.png" alt="" />
              <a href="#">Mobile Phone</a>
            </li>
            <li>
            <img src="./images/electronics.png.png" alt="" />
              <a href="#">Electronic</a>
            </li>
            <li>
            <img src="./images/home.png.png" alt="" />
              <a href="#">Home, Furniture & Appliances</a>
            </li>
            <li>
                <img src="./images/beauty.png.png" alt="" />
              <a href="#">Health & Beauty</a>
            </li>

            <li>
            <img src="./images/fashion.png.png" alt="" />
              <a href="#">Fashion</a>
            </li>
            <li>
            <img src="./images/hobbies.png.png" alt="" />
              <a href="#">Sports, Arts, Outdoor</a>
            </li>
          

         
            {/* <li>
              <a href="#" className="desktop-item">
                Sporting Goods
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Mega Menu
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="Ape.png" alt="" />
                  </div>
                  <div className="row">
                    <header>Mega 1 Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">UI/UX</a>
                      </li>
                      <li>
                        <a href="#">Website Design</a>
                      </li>
                      <li>
                        <a href="#">App Development</a>
                      </li>
                      <li>
                        <a href="#">Custom Logo</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Mega 2 Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Website Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Mega 3 Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Website Hosting</a>
                      </li>
                      <li>
                        <a href="#">Site Seal</a>
                      </li>
                      <li>
                        <a href="#">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="#">Business Cards</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li> */}
           
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars" />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default MegaMenu;
