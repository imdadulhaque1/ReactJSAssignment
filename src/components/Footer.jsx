import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
const Footer = () => {
  return (
    <MDBContainer>
      <MDBRow className="mx-md-n5">
        <MDBCol size="12" className="py-3 px-md-5 m-10">Copyrights @ 2021 TFP Solutions Bangladesh Ltd. All Rights Reserved |
          Terms and Conditions.</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Footer;
