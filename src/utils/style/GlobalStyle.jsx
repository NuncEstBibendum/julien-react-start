import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: Roboto, console-sans;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle