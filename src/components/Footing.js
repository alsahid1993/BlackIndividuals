import React, { Component } from "react";
import "../App/App.css";
export class Footer extends Component {
  render() {
    return (
      <h4 className="container-fluid">
        <div className="row text-center">
          <div className="col-12 social ">
            <ul class="social-icons">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </h4>
    );
  }
}
export default Footer;
