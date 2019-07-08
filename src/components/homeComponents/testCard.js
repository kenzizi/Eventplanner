import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = ({categorie}) => {
  return (
    <MDBCol className="col-md-3 categorie-animation">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={categorie.catImg} waves />
        <MDBCardBody>
          <MDBCardTitle>{categorie.catName}</MDBCardTitle>
          <MDBCardText>
              {categorie.catDesc}
          </MDBCardText>
          <MDBBtn href="/eventcreate">Create event ?</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;