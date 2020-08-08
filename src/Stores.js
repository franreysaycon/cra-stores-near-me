import React, { useContext, useEffect } from 'react'
import Box from './components/Box'
import MarginBox from './components/MarginBox'
import { LocationContext } from './LocationProvider'
import useGetStore from './api/useGetStores'
import { navigate } from '@reach/router'
import Card from './components/Card'
import Header from './components/Header'

const Stores = () => {
  const { position } = useContext(LocationContext)
  const { data, isLoading, isError } = useGetStore(position)

  useEffect(() => {
    if(!position){
      navigate('/')
    }
  }, [position])

  if(isLoading){
    return <div>....LOADING</div>
  }

  if(isError){
    return <div>....ERROR!</div>
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
