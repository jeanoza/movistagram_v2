import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieDetail from "./Section/MovieDetail";
import TvDetail from "./Section/TvDetail";
import { movieAction, tvAction } from "components/_actions";
import { useDispatch, useSelector } from "react-redux";

function Detail({
  match: {
    params: { id },
    url,
  },
}) {
  const isMovie = url.slice(0, 6) === "/movie" ? true : false;
  const parsedId = parseInt(id);
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => {
    if (isMovie) return state.movie;
    else return state.tv;
  });

  console.log(detail);

  useEffect(() => {
    if (isMovie) {
      movieAction.detail(dispatch, parsedId);
    } else {
      tvAction.detail(dispatch, parsedId);
    }
  }, [dispatch]);

  if (detail === undefined) {
    return "loading...";
  } else {
    if (isMovie)
      return (
        <MovieDetail
          backdrop_path={detail.backdrop_path}
          poster_path={detail.poster_path}
          title={detail.title}
          release_date={detail.release_date}
          genres={detail.genres}
          runtime={detail.runtime}
          overview={detail.overview}
        />
      );
    else {
      return (
        <TvDetail
          backdrop_path={detail.backdrop_path}
          poster_path={detail.poster_path}
          name={detail.name}
          first_air_date={detail.first_air_date}
          genres={detail.genres}
          runtime={detail.runtime}
          overview={detail.overview}
        />
      );
    }
  }
}

export default Detail;
