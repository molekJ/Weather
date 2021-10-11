import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--blue);
  color: var(--grey2);
  width: 1000px;
  margin: auto;
  display: grid;
  grid-template-rows: 100px 200px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 5px;

  p {
    padding-left: 20px;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 400px 300px 300px;
  align-items: center;

  > p {
    font-size: 40px;
    align-self: center;
    padding-bottom: 0;
  }

  p {
    align-self: center;
  }
`;

export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 400px 300px 300px;
`;

export const Temp = styled.p`
  font-size: 120px;
  font-weight: 400;
`;

export const InsideMainInfo = styled.div`
  display: grid;
  grid-template-rows: 100px;
`;

export const DisplayValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p:nth-of-type(2) {
    padding-top: 10px;
    font-size: 30px;
  }
`;
