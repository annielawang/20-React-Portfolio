import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const Resume = () => {
  return (
    <MDBContainer fluid className="vh-100">
      {/* Contact me via Email */}
      <div className="d-flex justify-content-center">
        <MDBCard className="w-25">
          <MDBCardImage className="img-thumbnail" position="top" src="" />
          <MDBCardBody>
            <MDBCardTitle>Please contact me:</MDBCardTitle>
            <MDBCardText>annielawang AT gmail</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
};

export default Resume;
