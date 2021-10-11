import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
           --white: #ffffff;
    --black: #000000;
    --lightgrey: #efefef;
    --grey: #f9f9f9;
    --grey2: #e9e8e8;
    --darkgrey: #878787;
    --darkgrey2: #787878;
    --darkgrey3: #212121;
    --orange: #ff801a;
    --lightorange: #ffc79a;
    --lightgreen: #adbb0c;
    --blue: #3fb4fd
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
