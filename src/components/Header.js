import styled from 'styled-components'

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spaces[0]};
  font-size: ${({ theme, size }) => theme.fontSizes[size+1]};
  color: ${({ theme }) => theme.fontColor.main}; 
  font-weight: bold;
`

Header.defaultProps = {
  size: 1
}

export default Header
