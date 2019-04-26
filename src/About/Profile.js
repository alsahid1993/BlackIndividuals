import  React  from "react";
 const Profile1 = ({ children, image  }) => (

  <div className="col-sm order-1">
        <img src={image} className="{alsahid}" alt="alsahid" class="img-thumbnail"></img> 
          
        <div className="col-sm order-2">
               <p>
                {children}
                </p>
                <button type="button" className="btn btn-outline-secondary">
                  Find Out More
                </button>
                </div> 
      </div>
 )
 export default Profile1;