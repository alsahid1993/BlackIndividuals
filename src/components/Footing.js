import React, { Component } from "react";
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <h4 className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-12 social padding">
            <button>
              <i className="fab fa-facebook fa-3x " />
            </button>
            <button>
              <i className="fab fa-twitter fa-3x" />
            </button>
            <button>
              <i className="fab fa-instagram fa-3x" />
            </button>
            <button>
              <i className="fab fa-google-plus-g fa-3x" />
            </button>
            <button>
              <i className="fab fa-youtube fa-3x" />
            </button>
          </div>
        </div>
      </h4>
    );
  }
}
export default Footer;