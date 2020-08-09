import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.bgColor.main};
    font-family: ${({ theme }) => theme.font.main};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export default GlobalStyles
