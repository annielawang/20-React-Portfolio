import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import homepage from "../../images/homepage.png";

const Home = () => {
  return (
    <MDBContainer fluid className="text-center vh-100 bkgrd">
      <div className="pt-2 vh-100">
        <img
          src={homepage}
          className="img-fluid rounded-pill shadow-4-strong"
          alt="Annie Li"
        />
        <p className=" my-0 py-0 text-dark fs-1">
          Welcome to Annie's portfolio page!
        </p>
      </div>
    </MDBContainer>
  );
};

export default Home;
