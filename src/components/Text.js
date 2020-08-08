import styled from 'styled-components'

const Text = styled.span`
  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme }) => theme.fontColor.main};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`

export default Text
