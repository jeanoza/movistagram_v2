import React, { useState, useEffect } from "react";
import Poster from "../../utils/Poster";
import styled from "styled-components";
import Section from "components/utils/Section";
import { useDispatch, useSelector } from "react-redux";
import { tvAction } from "components/_actions";

const Container = styled.div`
  width: 100%;
  padding: 15px;
  padding-top: 50px;
`;
function Tv() {
  const dispatch = useDispatch();
  const { airingToday, topRated, popular } = useSelector((state) => state.tv);
  useEffect(() => {
    tvAction.airingToday(dispatch);
    tvAction.topRated(dispatch);
    tvAction.popular(dispatch);
  }, [dispatch]);

  if (
    airingToday &&
    airingToday.length &&
    topRated &&
    topRated.length &&
    popular &&
    popular.length
  )
    return (
      <Container>
        <Section title="Popular">
          {popular.map((tv, index) => (
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
          {airingToday.map((tv, index) => (
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
          {topRated.map((tv, index) => (
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
  else {
    return "loading...";
  }
}

export default Tv;
