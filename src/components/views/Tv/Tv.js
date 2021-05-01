import React, { useState, useEffect } from "react";
import { tvsApi } from "../../../api/api";
import Poster from "../../utils/Poster";
import styled from "styled-components";
import Section from "components/utils/Section";

const Container = styled.div`
  width: 100%;
  padding: 15px;
  padding-top: 50px;
`;
function Tv() {
  const [AiringToday, setAiringToday] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    try {
      const {
        data: { results: airingToday },
      } = await tvsApi.airingToday();
      const {
        data: { results: topRated },
      } = await tvsApi.topRated();
      const {
        data: { results: popular },
      } = await tvsApi.popular();
      setAiringToday(airingToday);
      setTopRated(topRated);
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
      <Section title="Popular">
        {Popular.map((tv, index) => (
          <Poster
            key={index}
            id={tv.id}
            title={tv.name}
            poster_url={tv.poster_path}
            year={tv.first_air_date}
            average={tv.vote_average}
          />
        ))}
      </Section>
      <Section title="On Air Today">
        {AiringToday.map((tv, index) => (
          <Poster
            key={index}
            id={tv.id}
            title={tv.name}
            poster_url={tv.poster_path}
            year={tv.first_air_date}
            average={tv.vote_average}
          />
        ))}
      </Section>
      <Section title="Top Rated">
        {TopRated.map((tv, index) => (
          <Poster
            key={index}
            id={tv.id}
            title={tv.name}
            poster_url={tv.poster_path}
            year={tv.first_air_date}
            average={tv.vote_average}
          />
        ))}
      </Section>
    </Container>
  );
}

export default Tv;
