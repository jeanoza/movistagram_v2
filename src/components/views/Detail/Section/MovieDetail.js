import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  opacity: 0.5;
`;
const Main = styled.div`
  margin: 0px 50px;
  display: flex;
  justify-content: space-around;
`;
const DetailPoster = styled.div`
  width: 30%;
  height: 75vh;
  border-radius: 20px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Text = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Subtitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
const Span = styled.span`
  margin-right: 10px;
`;
const Overview = styled.div`
  font-size: 14px;
`;
function MovieDetail({
  backdrop_path,
  poster_path,
  title,
  release_date,
  runtime,
  genres,
  overview,
}) {
  return (
    <Container>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
      <Main>
        <DetailPoster
          bgImage={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
        <Text>
          <Title>{title}</Title>
          <Subtitle>
            <Span># {release_date.slice(0, 4)}</Span>
            <Span># {runtime} min</Span>
            {genres.map((genre, index) => (
              <Span key={index}># {genre.name}</Span>
            ))}
          </Subtitle>
          <Overview>{overview}</Overview>
        </Text>
      </Main>
    </Container>
  );
}

export default MovieDetail;
