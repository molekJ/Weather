import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --main: yellow;
        --red: red;
        --grey: #f2f2f2;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    font-family: 'Rubik', sans-serif;
    min-height: 100vh;
    }

`;
