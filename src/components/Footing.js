import React, { Component } from "react";
import "../App/App.css";
export class Footer extends Component {
  render() {
    return (
      <h4 className="container-fluid">
        <div className="row text-center">
          <div className="col-12 social ">
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
