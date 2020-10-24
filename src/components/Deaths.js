import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { fetchDeaths } from '../redux/death/deathActions'

function Deaths () {
  useEffect(() => {
    dispatch(fetchDeaths())
  }, [])
const death = useSelector(state => state.death);
const dispatch = useDispatch(fetchDeaths());
  return death.loading ? (
    <h2>Loading</h2>
  ) : death.error ? (
    <h2>{death.error}</h2>
  ) : (
    <div>
      <h2>Deaths</h2>
      <div>
        {
          death.deaths.map(death => <p>{death.death}</p>)
        }                
      </div>
    </div>
  )
}


export default Deaths;