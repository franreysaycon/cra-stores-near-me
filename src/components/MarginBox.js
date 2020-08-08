import styled from 'styled-components'

const MarginBox = styled.div`
  display: flex;
  flex: 1;
  max-width: 1200px;
  margin: auto;
  padding: ${({ theme }) => theme.spaces[1]};
  flex-direction: column;
  height: inherit;
`

export default MarginBox
