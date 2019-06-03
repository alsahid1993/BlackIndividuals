import React, { Component } from "react";
import Wrapper from "../components/Wrapper/index";
import Mapspage from './mapspage';
import { NavBar } from "../Navbar/navbar";

class BlkMaps extends Component {
  render() {
    return (
      <div className="App">
    
        <Wrapper>  
          <NavBar/>
        <Mapspage />
        </Wrapper> 
    
        </div>
    );
  }
}
export default BlkMaps;
