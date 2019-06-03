          import React, { Component } from "react";
          import "./App.css";
          import "./Normalise.css";
          import { NavBar } from "../Navbar/navbar";
          import { Testimony } from "../testimonials/testimonial";
          import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
          import Wrapper from "../components/Wrapper/index";

          class App extends Component {
              render() {
              return (
                <div >
                  <Wrapper>
                  <NavBar />
                  <Testimony />
                 </Wrapper>
                  <div />
                </div>
              );
            }
          }

          export default App;
