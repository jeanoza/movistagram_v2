import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset";
const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        background-color:rgb(20,20,20);
        color:rgb(255,255,255);
    }
`;

export default GlobalStyles;
