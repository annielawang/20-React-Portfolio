import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./About.css";

const About = () => {
  return (
    <MDBContainer fluid className="vh-100 bkgrd">
      <div className="d-flex justify-content-center flex-column flex-sm-row">
        <MDBCard className="order-sm-2 card-picture my-4 mx-auto mx-sm-0">
          <MDBCardImage variant="top" className="img-fluid rounded" src="" />
        </MDBCard>

        <MDBCard
          border="dark"
          className="order-sm-1 my-4 card-text mx-auto mx-sm-0"
        >
          <MDBCardBody>
            <MDBCardTitle>About Annie</MDBCardTitle>
            <MDBCardText>
              Annie is a Full Stack Web Developer with years of Data Analysis
              experience on Health Care Funding. Also, Annie is a certificated
              Montessori Teacher, with 3 years Elemental teaching experience.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
};

export default About;
