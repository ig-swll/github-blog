import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.base.background};
    color: ${({ theme }) => theme.colors.base.text};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: antialiased;
  }

  body, input, button {
    font-family: Nunito, sans-serif;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 160%;
  }

  input {
    box-shadow: none;
    border: none;
    border-radius: 6px;
  }

  :focus {
    outline-color: transparent;
    outline-width: 1px;
    outline-style: solid;
  }

  :focus:not(input) {
    outline-color: ${({ theme }) => theme.colors.blue};
  }
`
