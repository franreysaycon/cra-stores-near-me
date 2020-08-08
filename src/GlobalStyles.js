import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.bgColor.main};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export default GlobalStyles
