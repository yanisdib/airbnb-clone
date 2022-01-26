import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        border: none;
        list-style-type: none;
        box-sizing: border-box; 
    }

    :root {
        /** COLORS */
        --brand-color: #FF385C;
        --ui-brand-color: #000000; 

        /** BREAKPOINTS */
        --ui-media-breakpoints-xs: 1440px;
        --ui-media-breakpoints-sm: 744px;
        --ui-media-breakpoints-md: 950px;
        --ui-media-breakpoints-lg: 1128px;
        --ui-media-breakpoints-xl: 1440px;

        /** GUTTERS */
        --ui-padding-x: 10px;
        --ui-padding-y: 15px;
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        transition: background color 0.25s linear;
    }

    button {
        font-family: inherit;
        color: ${({ theme }) => theme.text};
    }
`;