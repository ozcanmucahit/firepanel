import React, { Component } from "react";
import fire from "../config/Fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mucahit"
    };
  }

  logout = () => {
    fire.auth().signOut();
  };

  handleClick() {}
  render() {
    return (
      <div className="container bg-danger">
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark">
          <p className="navbar-brand " href="#">
            {" "}
            <h2>Hoşgeldiniz</h2>
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
            <ul class="navbar-nav ml-auto nav-flex-icons">
              <li class="nav-item">
                <p class="nav-link waves-effect waves-light" />
              </li>
              <li class="nav-item avatar dropdown">
                <p
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink-55"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://scontent.fadb3-2.fna.fbcdn.net/v/t1.0-1/p160x160/89768232_2565882270319934_1273991062108504064_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=x31F-gXnDLYAX-BYyQH&_nc_ht=scontent.fadb3-2.fna&_nc_tp=6&oh=ed311b17efb35771786434ae71302a3b&oe=5E975527"
                    className="rounded-circle z-depth-0  border "
                  />
                </p>
                <div
                  class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
                  aria-labelledby=""
                >
                  <p
                    className="dropdown-item cursor"
                    href="#"
                    onClick={this.logout}
                  >
                    <i class="fas fa-sign-out-alt" /> Çıkış
                  </p>

                  <p className="dropdown-item cursor" href="#">
                    <i class="fas fa-envelope" /> mucahit@example.com
                  </p>

                  <p
                    className="dropdown-item cursor"
                    href="#"
                    onClick={this.handleClick}
                  >
                    <i class="far fa-user" /> {this.state.name}{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;
