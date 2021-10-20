import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
        --background: #312E38;
    }

    *  {
        text-decoration: none;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1175px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Noto Sans Mono', monospace;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;
