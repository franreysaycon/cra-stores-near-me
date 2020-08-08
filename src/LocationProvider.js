import React from 'react'
import useGetLocation from './useGetLocation'
import { createContext } from 'react'

export const LocationContext = createContext()

const LocationProvider = ({ children }) => {
  const getLocationApi = useGetLocation()

  return (
    <LocationContext.Provider value={getLocationApi}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationProvider
