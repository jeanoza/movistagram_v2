import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Image = styled.div`
  width: 125px;
  height: 180px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 15px;
  margin-bottom: 5px;
`;
const Average = styled.span`
  opacity: 0;
  position: absolute;
  bottom: 50px;
  right: 10px;
`;
const Container = styled(Link)`
  margin: 10px 0px;
  position: relative;
  :hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Average} {
      opacity: 1;
    }
  }
`;
const Title = styled.div`
  font-size: 12px;
  margin-bottom: 2px;
`;
const Year = styled.div`
  font-size: 10px;
`;

function Poster({ id, title, year, average, poster_url, isMovie }) {
  return (
    <Container to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Image bgImage={poster_url} />
      <Average>{average}</Average>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  );
}

export default Poster;

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  average: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

//https://image.tmdb.org/t/p/w500/
