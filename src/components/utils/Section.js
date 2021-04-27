import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 25px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
}

export default Section;
