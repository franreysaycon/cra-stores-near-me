import { useQuery } from 'react-query'
import Resources from './resources'
import axios from 'axios'

const useGetStore = (location) => {
  const fetchNearbyStores = async () => {
    return await axios.get('https://us-central1-react-stores-near-me.cloudfunctions.net/getStoresNearby', {
      params: {
        location
      }
    })
  }

  const query = useQuery([Resources.STORES, location], fetchNearbyStores)

  return {
    ...query,
    data: query.data?.data || []
  }
}

export default useGetStore
