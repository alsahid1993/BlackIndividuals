          import React, { Component } from "react";
          import "./App.css";
          import { Footer } from "../components/Footer";
          import { NavBar } from "../Navbar/navbar";
          import { Testimony } from "../testimonials/testimonial";
          import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
          import Header from "../components/Header"
    

          class App extends Component {
              render() {
              return (
                <div >
                  <Header/>
                
                  <NavBar />
              
                  <hr />
                  <Testimony />
                  <Footer />
                  <div />
                </div>
              );
            }
          }

          export default App;
