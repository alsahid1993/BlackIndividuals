import React from "react";
import { withRouter } from "react-router";
import styles from "styled-components";
import "../App/App.css";
const Button = styles.button`
 display:inline-block;
 padding:0.35em 1.2em;
 border:0.1em solid #FFFFFF;
 margin:0 0.3em 0.3em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color: #000;
 text-align:center;
 transition: all 0.2s;

:hover{
 color:#FFF;
 background-color:#000;
}
`;

const Navbar = props => (
  <div className="navbar">
    <Button onClick={() => props.history.push("/home")}>
      <i className="fas fa-home" />
    </Button>
    <Button onClick={() => props.history.push("/AboutUs")}>
      <i className="fas fa-address-card" />
    </Button>
    <Button onClick={() => props.history.push("/map")}>
      <i className="fas fa-map-marked-alt" />{" "}
    </Button>
    <Button onClick={() => props.history.push("/trips")}>
      <i className="fas fa-people-carry" />{" "}
    </Button>

    <ul>
      <li>
        <a class="active" href="/home">
          Home
        </a>
      </li>
      <li>
        <a href="/AboutUs">About us</a>
      </li>
      <li>
        <a href="/trips">Our Trips</a>
      </li>
    </ul>
  </div>
);
export const NavBar = withRouter(Navbar);
