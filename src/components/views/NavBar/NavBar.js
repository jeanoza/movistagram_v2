import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Search from "../Search/Search";

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 100px;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#0000ff" : "transparent")};
`;

function NavBar({ location: { pathname } }) {
  return (
    <Container>
      <List>
        <Link to="/">
          <Item current={pathname == "/"}>Movie</Item>
        </Link>
        <Link to="/tv">
          <Item current={pathname == "/tv"}>TV</Item>
        </Link>
        <Link to="/search">
          <Item current={pathname == "/search"}>Search</Item>
        </Link>
      </List>
    </Container>
  );
}

export default withRouter(NavBar);
