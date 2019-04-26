import React, { Component } from "react";
import "../App/App.css";
import AlsahidImage from "../img/alsahid.jpg";

import { LewisWBio } from "./lewisBio";
import { JohnFBio } from "./johnBio";
import { Footer } from "../components/Footer";
import { NavBar } from "../Navbar/navbar";
import ULottie from "../components/world";
import { FreBseAuth } from "../Authentication/FreBseAuthentication";
import ProfileOfAlsahid from "./Profile";
class AboutUsPpl extends Component {
  render() {
    return (
      <div className="App">
        <FreBseAuth />
        <NavBar />
        <ULottie />
        <hr />
        <h2>Who We Are</h2>
        <hr />
        <div class="container">
          <div class="row">
            <JohnFBio />
          <ProfileOfAlsahid image={AlsahidImage}> Pretium quis volutpat ultrices nam senectus nisl inceptos risus
                  tristique quisque, posuere tempor etiam lacinia conubia cursus
                  tellus magna eget maecenas, interdum sodales tincidunt velit
                  purus aptent aliquet fusce pulvinar semper egestas volutpat
                  facilisis ante.</ProfileOfAlsahid>
            <LewisWBio />
          </div>
        </div>
        <hr />

        <hr />
        <Footer />
        <div />
      </div>
    );
  }
}
export default AboutUsPpl;
