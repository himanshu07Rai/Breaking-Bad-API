import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { fetchCharacters } from '../redux/characters/cActions'

function Characters () {
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])
const character = useSelector(state => state.character);
const dispatch = useDispatch(fetchCharacters());
  return character.loading ? (
    <h2>Loading</h2>
  ) : character.error ? (
    <h2>{character.error}</h2>
  ) : (
    <div>
      <h2>Characters</h2>
      <div>
        {
          character.characters.map(character => <p>{character.name}</p>)
        }                
      </div>
    </div>
  )
}


export default Characters;