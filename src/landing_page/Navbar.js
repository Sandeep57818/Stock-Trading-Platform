import React from 'react'
import {link} from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg border-bottom"
      style = {{backgroundColor:"#FFF"}}
      >
        <div class="container">
          <link class="navbar-brand" to="/">
            <img src="media/images/logo.svg" style={{width:"25%"}}  alt='Logo'/>
            </link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <link class="nav-link active" aria-current="page" to="/signup">Signup</link>
              </li>
              <li class="nav-item">
                <link class="nav-link active" to="/about">About</link>
              </li>
              <li class="nav-item">
                <link class="nav-link active" to="/product">Product</link>
              </li>
              <li class="nav-item">
                <link class="nav-link active" to="pricing">Pricing</link>
              </li>
              <li class="nav-item">
                <link class="nav-link active" to="support">Support</link>
              </li>

            </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;