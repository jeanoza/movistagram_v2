import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  background-color: rgb(20, 20, 20);
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
          <Item current={pathname === "/"}>Movie</Item>
        </Link>
        <Link to="/tv">
          <Item current={pathname === "/tv"}>TV</Item>
        </Link>
        <Link to="/search">
          <Item current={pathname === "/search"}>Search</Item>
        </Link>
      </List>
    </Container>
  );
}

export default withRouter(NavBar);
