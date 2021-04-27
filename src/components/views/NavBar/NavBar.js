import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  background-color: rgba(20, 20, 20, 0.8);
`;
const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
const Form = styled.form`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15px;
  left: calc(100vw / 2 - 320px / 2);
`;
const Input = styled.input`
  width: 320px;
  color: inherit;
  font-size: 18px;
  &[type="text"] {
    background-color: inherit;
    border: none;
    border-bottom: 1px solid rgb(100, 100, 100);
  }
`;

function NavBar({ location: { pathname }, history }) {
  const [term, setTerm] = useState("");
  const onChange = (event) => {
    setTerm(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${term}`);
    setTerm("");
  };
  return (
    <Container>
      <List>
        <Link to="/">
          <Item current={pathname === "/"}>Movie</Item>
        </Link>
        <Link to="/tv">
          <Item current={pathname === "/tv"}>TV</Item>
        </Link>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            onChange={onChange}
            value={term}
            placeholder="Search Movie or TV Show"
          />
        </Form>
      </List>
    </Container>
  );
}

export default withRouter(NavBar);
