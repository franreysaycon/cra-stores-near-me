import React from 'react'
import Box from './components/Box'
import MarginBox from './components/MarginBox'
import useGetStore from './api/useGetStores'
import Card from './components/Card'
import Header from './components/Header'

const Stores = ({ position }) => {
  const { data, isLoading, isError } = useGetStore(position)

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
