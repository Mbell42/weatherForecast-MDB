//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function ForecastCard () {
      return (
        <MDBContainer className="mt-5 mb-3">
          <MDBRow>
            <MDBCol>
              <h5>Forecast Card Data</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
  
  export default ForecastCard;