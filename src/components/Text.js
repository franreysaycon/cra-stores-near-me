import styled from 'styled-components'

const Text = styled.span`
  color: ${({ theme }) => theme.fontColor.main};
  line-height: 0.95;
  font-size: ${({ size, theme }) => theme.fontSizes[size-1]};
`

Text.defaultProps = {
  size: 1,
}

export default Text
