import React, { useState, useEffect } from "react";
// import { moviesApi } from "api/api";
import Poster from "../../utils/Poster";
import styled from "styled-components";
import Section from "../../utils/Section";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlaying, getPopular, getUpcoming } from "components/_actions";

const Container = styled.div`
  width: 100%;
  padding: 15px;
  padding-top: 50px;
`;

function Home(props) {
  const dispatch = useDispatch();
  const { nowPlaying, upcoming, popular } = useSelector((state) => state);
  useEffect(() => {
    getNowPlaying(dispatch);
    getUpcoming(dispatch);
    getPopular(dispatch);
  }, [dispatch]);

  if (
    nowPlaying &&
    nowPlaying.length &&
    upcoming &&
    upcoming.length &&
    popular &&
    popular.length
  )
    return (
      <Container>
        <Section title="Now Playing">
          {nowPlaying.map((movie, index) => (
            <Poster
              key={index}
              id={movie.id}
              title={movie.title}
              poster_url={movie.poster_path}
              year={movie.release_date}
              average={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
        <Section title="Popular">
          {popular.map((movie, index) => (
            <Poster
              key={index}
              id={movie.id}
              title={movie.title}
              poster_url={movie.poster_path}
              year={movie.release_date}
              average={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
        <Section title="Upcoming">
          {upcoming.map((movie, index) => (
            <Poster
              key={index}
              id={movie.id}
              title={movie.title}
              poster_url={movie.poster_path}
              year={movie.release_date}
              average={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      </Container>
    );
  else {
    return "loading...";
  }
}
export default Home;

//counter
/*
function Home(props) {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state);
  const onPlus = () => dispatch(plus());
  const onMinus = () => dispatch(minus());
  console.log(number);
  return (
    <Container>
      <div>{number}</div>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </Container>
  );
}
export default Home;
*/
/*
function Home({ nowPlaying }) {
  const [NowPlaying, setNowPlaying] = useState([]);
  console.log(nowPlaying);
  const [Upcoming, setUpcoming] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      setNowPlaying(nowPlaying);
      setUpcoming(upcoming);
      setPopular(popular);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return loading ? (
    <>loading...</>
  ) : (
    <Container>
      <Section title="Now Playing">
        {NowPlaying.map((movie, index) => (
          <Poster
            key={index}
            id={movie.id}
            title={movie.title}
            poster_url={movie.poster_path}
            year={movie.release_date}
            average={movie.vote_average}
            isMovie={true}
          />
        ))}
      </Section>
      <Section title="Popular">
        {Popular.map((movie, index) => (
          <Poster
            key={index}
            id={movie.id}
            title={movie.title}
            poster_url={movie.poster_path}
            year={movie.release_date}
            average={movie.vote_average}
            isMovie={true}
          />
        ))}
      </Section>
      <Section title="Upcoming">
        {Upcoming.map((movie, index) => (
          <Poster
            key={index}
            id={movie.id}
            title={movie.title}
            poster_url={movie.poster_path}
            year={movie.release_date}
            average={movie.vote_average}
            isMovie={true}
          />
        ))}
      </Section>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return { nowPlaying: state };
};
export default connect(mapStateToProps)(Home);
*/
