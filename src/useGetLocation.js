import { useState } from 'react'

const GetLocationErrors = {
  GENERAL: 'Something went wrong getting your current location',
  NOT_SUPPORTED: 'Browser does not support geolocation'
}

const useGetLocation = () => {

  const [position, setPosition] = useState('')
  const [error, setError] = useState(null)

  const saveLocation = (position) => {
    setPosition(`${position.coords.latitude},${position.coords.longitude}`)
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation,() => { setError(GetLocationErrors.GENERAL) });
    } else {
      setError(GetLocationErrors.NOT_SUPPORTED)
    }
  }

  return {
    getLocation,
    position,
    error,
    success: !!position,
  }
}

export default useGetLocation
