import React, { useEffect } from 'react';
import Box from './components/Box';
import MarginBox from './components/MarginBox';
import Header from './components/Header';
import styled from 'styled-components'
import Button from './components/Button';
import StoreImage from './components/StoreImage';
import { navigate } from '@reach/router';
import useGetLocation from './useGetLocation';

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const App = () => { 
  const { getLocation, position, success, error } = useGetLocation()

  useEffect(() => {
    if(error){
      alert('Unable to get current location. Check if the app is permitted to access location.')
    }
  }, [error])

  useEffect(() => {
    if(success){
      navigate(`/stores/${position}`)
    }
  }, [position, success])

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
