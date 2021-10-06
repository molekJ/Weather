import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  a {
    margin: 0 40px;
    text-decoration: none;
    color: inherit;
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <p>Lista miast</p>
      </Link>
      <Link to="/search">
        <p>Znajdz miasto</p>
      </Link>
    </Container>
  );
};
