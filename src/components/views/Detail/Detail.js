import React, { useState, useEffect } from "react";
import { moviesApi, tvsApi } from "../../../api/api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
`;

function Detail({
  match: {
    params: { id },
    url,
  },
}) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const isMovie = url.slice(0, 6) === "/movie" ? true : false;
  const parsedId = parseInt(id);

  const getDetail = async () => {
    try {
      if (isMovie) {
        const { data } = await moviesApi.detail(parsedId);
        setDetail(data);
      } else {
        const { data } = await tvsApi.detail(parsedId);
        setDetail(data);
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
    <Container
      bgImage={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`}
    ></Container>
  ) : (
    <Container
      bgImage={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`}
    ></Container>
  );
}

export default Detail;
