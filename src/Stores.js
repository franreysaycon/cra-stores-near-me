import React from 'react'
import Box from './components/Box'
import MarginBox from './components/MarginBox'
import useGetStore from './api/useGetStores'
import Card from './components/Card'
import Header from './components/Header'
import { SwishSpinner } from "react-spinners-kit"
import styled, { useTheme } from 'styled-components'
import Button from './components/Button'

const Placeholder = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > span {
    margin-bottom: ${({ theme }) => theme.spaces[0]};
  }
`

const Stores = ({ position }) => {
  const { data, isLoading, error } = useGetStore(position)
  const theme = useTheme()

  if(isLoading){
    return (
      <Placeholder>
        <SwishSpinner size={30} color={theme.lgColor.main} loading={true} />
      </Placeholder>
    )
  }

  if(!!error){
    return (
      <Placeholder>
        <span>Something went wrong.</span>
        <Button>Try again</Button>
      </Placeholder>
    )
  }

  return (
    <Box>
      <MarginBox>
        <Header>Results</Header>
        {
          data.map((store, i) => (
            <Card
              key={store.id}
              name={store.name}
              location={store.vicinity}
              number={i+1}
              mapLocation={`${store.geometry.location.lat},${store.geometry.location.lng}`}
            />
          ))
        }
      </MarginBox>
    </Box>
  )
}

export default Stores
