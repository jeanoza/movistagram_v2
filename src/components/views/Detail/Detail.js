import React, { useState, useEffect } from "react";
import { moviesApi, tvsApi } from "../../../api/api";
import styled from "styled-components";
import MovieDetail from "./Section/MovieDetail";
import TvDetail from "./Section/TvDetail";

function Detail({
  match: {
    params: { id },
    url,
  },
}) {
  const [Result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const isMovie = url.slice(0, 6) === "/movie" ? true : false;
  const parsedId = parseInt(id);

  const getDetail = async () => {
    try {
      if (isMovie) {
        const { data } = await moviesApi.detail(parsedId);
        setResult(data);
        console.log(data);
      } else {
        const { data } = await tvsApi.detail(parsedId);
        setResult(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return loading ? (
    "loading..."
  ) : isMovie ? (
    <MovieDetail
      backdrop_path={Result.backdrop_path}
      poster_path={Result.poster_path}
      title={Result.title}
      release_date={Result.release_date}
      genres={Result.genres}
      runtime={Result.runtime}
      overview={Result.overview}
    />
  ) : (
    <TvDetail
      backdrop_path={Result.backdrop_path}
      poster_path={Result.poster_path}
      name={Result.name}
      first_air_date={Result.first_air_date}
      genres={Result.genres}
      runtime={Result.runtime}
      overview={Result.overview}
    />
  );
}

export default Detail;
