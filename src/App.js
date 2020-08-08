import React from 'react';
import Box from './components/Box';
import MarginBox from './components/MarginBox';
import Header from './components/Header';
import styled from 'styled-components'
import Button from './components/Button';
import StoreImage from './components/StoreImage';
import { useContext } from 'react';
import { LocationContext } from './LocationProvider';

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const App = () => { 

  const { getLocation, position, error } = useContext(LocationContext)
  console.log(position)
  console.log(error)

  return (
    <Box>
      <MarginBox>
        <Content>
          <StoreImage />
          <Header>Are there stores nearby?</Header>
          <Button onClick={getLocation}>Find in my location</Button>
        </Content>
      </MarginBox>
    </Box>
  )
}

export default App;
