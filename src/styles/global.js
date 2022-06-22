import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-Focus: #FF427F;
        --color-primary-Disable: #59323F;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;
    }

    body {
        background: var(--color-grey-4);
    }

    ::-webkit-scrollbar {
        width: 3px;
        height: 3px; /* A altura só é vista quando a rolagem é horizontal */
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        padding: 2px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #000;
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: var(--color-grey-0);
    }

    h2 {
        color: var(--color-primary);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    hr {
        color: red;
    }
`