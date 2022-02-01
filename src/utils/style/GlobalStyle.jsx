import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: 'Urbanist', console-sans, sans-serif;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle