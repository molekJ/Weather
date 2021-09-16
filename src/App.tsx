import styled from "styled-components";
import { getData } from "./Clients/backend";
import { Cities } from "./Components/Cities";
import { Details } from "./Components/Details";
import { GlobalStyle } from "./GlobalStyles";

const Container = styled.div`
  display: flex;
`;

function App() {
  // getData()
  //   .then((data) => console.log("Pogoda:", data.name, data))
  //   .catch((err) => console.log("Some error:", err.message));

  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Cities></Cities>
      <Details></Details>
    </Container>
  );
}

export default App;
