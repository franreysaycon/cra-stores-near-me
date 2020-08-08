import React, { useEffect } from 'react';
import Box from './components/Box';
import MarginBox from './components/MarginBox';
import Header from './components/Header';
import styled from 'styled-components'
import Button from './components/Button';
import StoreImage from './components/StoreImage';
import { useContext } from 'react';
import { LocationContext } from './LocationProvider';
import { navigate } from '@reach/router';

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const App = () => { 
  const { getLocation, success } = useContext(LocationContext)

  useEffect(() => {
    if(success){
      navigate('/stores')
    }
  }, [success])

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
