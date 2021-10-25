import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`

:root {
        --background: #6610f2;
        --sweet-white: #f4ede8;
        --gray: #9e9e9e;
    }

    *  {
        text-decoration: none;
        color: inherit;
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
      overflow-x: hidden;
      background: ${shade(0.8, '#6610f2')};
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Noto Sans Mono', monospace;
        font-size: 16px;
        color: var(--sweet-white);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;
