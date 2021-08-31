import React from "react";
import { NavLink } from "react-router-dom";

import Footer from "./Footer.jsx";

import One from "../images/one.gif";
import Two from "../images/two.gif";
import Three from "../images/three.gif";

import "../App.css";

const Home = () =>{
  return(
    <>
     <div className="my-5">
     </div>
     <div className="container-fluid mb-5">
       <div className="row">
         <div className="col-10 mx-auto">
           <div className="row gy-4">

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={One} className="card-img-top" alt="Single Bed Info" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">Slowly Moving</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/" className="btn btn-primary">
                           Submit
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={Two} className="card-img-top" alt="Double Bed Info" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">Colorfull Moving</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/" className="btn btn-primary">
                            Submit
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={Three} className="card-img-top" alt="Triple Bed Info" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">Fastly Moving</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/" className="btn btn-primary">
                            Submit
                    </NavLink>
                </div>
                </div>
            </div>


           </div>
         </div>
       </div>

      <div className="bg-info">
         < Footer />
      </div>

     </div>
    
    </>
  );
};
export default Home;