import React from "react";
import { Footer } from "../Footing";
import { Header } from "../Heading";


 const Wrapper = ({ children  }) => (

  <div>
  <Header />
  <div>{children}</div>
  <Footer />
</div>
 )
 export default Wrapper;
