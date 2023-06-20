import { createGlobalStyle } from "styled-components";
import "../src/fonts/font.css"

const GlobalStyle=createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    input, select, textarea, button{
        font-family:inherit;
    }

`

export default GlobalStyle;