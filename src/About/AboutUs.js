import React, { Component } from "react";
import "../App/App.css";
import AlsahidImage from "../img/Alsahid.jpg";
import  lewisImage  from "../img/Lewis.jpg";
import  JohnImage  from "../img/John.jpg";

import Wrapper from "../components/Wrapper/index";
import { NavBar } from "../Navbar/navbar";
import ULottie from "../components/world";
import { FreBseAuth } from "../Authentication/FreBseAuthentication";
import Profile1 from "./Profile";
class AboutUsPpl extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Wrapper>
        <FreBseAuth />
        <NavBar />
        <ULottie />
        <div class="container">
          <div class="row">
          <Profile1 image={JohnImage}> Pretium quis volutpat ultrices nam senectus nisl inceptos risus
                  tristique quisque, posuere tempor etiam lacinia conubia cursus
                  tellus magna eget maecenas, interdum sodales tincidunt velit
                  purus aptent aliquet fusce pulvinar semper egestas volutpat
                  facilisis ante.</Profile1>
          <Profile1 image={AlsahidImage}> Pretium quis volutpat ultrices nam senectus nisl inceptos risus
                  tristique quisque, posuere tempor etiam lacinia conubia cursus
                  tellus magna eget maecenas, interdum sodales tincidunt velit
                  purus aptent aliquet fusce pulvinar semper egestas volutpat
                  facilisis ante.</Profile1>
          <Profile1 image={lewisImage}> Pretium quis volutpat ultrices nam senectus nisl inceptos risus
                  tristique quisque, posuere tempor etiam lacinia conubia cursus
                  tellus magna eget maecenas, interdum sodales tincidunt velit
                  purus aptent aliquet fusce pulvinar semper egestas volutpat
                  facilisis ante.</Profile1>
          </div>
        </div>
        <hr />
        <div />
        </Wrapper>
        </div>
      </div>
    );
  }
}
export default AboutUsPpl;
