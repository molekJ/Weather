import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  position: relative;
  font-size: 16px;

  button {
    position: relative;
    top: 15px;
    border: none;
    background: inherit;
    margin-left: 20px;

    img {
      height: 40px;
    }

    :hover {
      cursor: pointer;
    }
  }

  input {
    border: none;
    font-size: 16px;
    appearance: none;
    background: var(--grey);
    padding: 12px;
    border-radius: 3px;
    width: 250px;
    outline: none;
  }
  input:focus::placeholder {
    color: transparent;
  }
  input::placeholder {
    color: #aaa;
    transition: color 0.3s ease;
  }
`;
