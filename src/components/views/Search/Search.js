import React, { useState, useEffect } from "react";
import { moviesApi, tvsApi } from "../../../api/api";
import Poster from "../../utils/Poster";
import Section from "../../utils/Section";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 15px;
  padding-top: 50px;
`;

function Search({
  match: {
    params: { id },
  },
  history,
}) {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [loading, setLoading] = useState(false);

  const initializationInput = () => {
    history.push(`/search/${id}`);
  };
  const searchByTerm = async (term) => {
    setLoading(true);
    try {
      const {
        data: { results: movieArray },
      } = await moviesApi.search(term);
      const {
        data: { results: tvArray },
      } = await tvsApi.search(term);
      setMovies(movieArray);
      setTvs(tvArray);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    searchByTerm(id);
    initializationInput();
  }, [id]);

  return loading ? (
    "loading..."
  ) : (
    <Container>
      {movies && movies.length > 0 && (
        <Section title="Results in Movies ...">
          {movies.map((movie, index) => (
            <Poster
              key={index}
              id={movie.id}
              title={movie.title}
              poster_url={movie.poster_path}
              year={movie.release_date && movie.release_date.slice(0, 4)}
              average={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {tvs && tvs.length > 0 && (
        <Section title="Results in TV Shows ...">
          {tvs.map((tv, index) => (
            <Poster
              key={index}
              id={tv.id}
              title={tv.name}
              poster_url={tv.poster_path}
              year={tv.first_air_date && tv.first_air_date.slice(0, 4)}
              average={tv.vote_average}
            />
          ))}
        </Section>
      )}
    </Container>
  );
}

export default Search;
