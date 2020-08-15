import React from 'react'
import ConvenienceStore from '../store.png'
import styled from 'styled-components'

const Image = styled.img`
  width: 200px;
  margin-bottom: ${({ theme }) => theme.spaces[1]};
`

const StoreImage = () => (
  <Image src={ConvenienceStore} />
)

export default StoreImage
