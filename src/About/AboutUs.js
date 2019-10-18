import React, { Component } from "react";
import "../App/App.css";
import AlsahidImage from "../img/alsahid.jpg";
import lewisImage from "../img/lewis.jpg";
import JohnImage from "../img/john.jpg";

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
            <div class="team-flow-container">
              <div class="johnProfile">
               
                <Profile1 image={JohnImage}>
                  {" "}
                  <p>
                    Pretium quis volutpat ultrices nam senectus nisl inceptos
                    risus tristique quisque, posuere tempor etiam lacinia
                    conubia cursus tellus magna eget maecenas, interdum sodales
                    tincidunt velit purus aptent aliquet fusce pulvinar semper
                    egestas volutpat facilisis ante.
                  </p>
                </Profile1>
              </div>
              <div class="alsahidProfile">
                <Profile1 image={AlsahidImage}>
                  {" "}
                  <p>
                    Pretium quis volutpat ultrices nam senectus nisl inceptos
                    risus tristique quisque, posuere tempor etiam lacinia
                    conubia cursus tellus magna eget maecenas, interdum sodales
                    tincidunt velit purus aptent aliquet fusce pulvinar semper
                    egestas volutpat facilisis ante.
                  </p>
                </Profile1>
              </div>
              <div>
                <Profile1 image={lewisImage}>
                  {" "}
                  <p>
                    Pretium quis volutpat ultrices nam senectus nisl inceptos
                    risus tristique quisque, posuere tempor etiam lacinia
                    conubia cursus tellus magna eget maecenas, interdum sodales
                    tincidunt velit purus aptent aliquet fusce pulvinar semper
                    egestas volutpat facilisis ante.
                  </p>
                </Profile1>
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
