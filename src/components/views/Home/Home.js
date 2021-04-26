import React, { useState, useEffect } from "react";
import { moviesApi } from "../../../api/api";
import Poster from "../../utils/Poster";
import styled from "styled-components";
import Section from "../../utils/Section";

function Home() {
  const [NowPlaying, setNowPlaying] = useState([]);
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
    <>
      <Section title="Now Playing">
        {NowPlaying.map((movie, index) => (
          <Poster
            key={index}
            id={movie.id}
            title={movie.title}
            poster_url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            year={movie.release_date.slice(0, 4)}
            average={movie.vote_average}
          />
        ))}
      </Section>
      <Section title="Popular">
        {Popular.map((movie, index) => (
          <Poster
            key={index}
            id={movie.id}
            title={movie.title}
            poster_url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            year={movie.release_date.slice(0, 4)}
            average={movie.vote_average}
          />
        ))}
      </Section>
      <Section title="Upcoming">
        {Upcoming.map((movie, index) => (
          <Poster
            key={index}
            id={movie.id}
            title={movie.title}
            poster_url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            year={movie.release_date.slice(0, 4)}
            average={movie.vote_average}
          />
        ))}
      </Section>
    </>
  );
}

export default Home;
