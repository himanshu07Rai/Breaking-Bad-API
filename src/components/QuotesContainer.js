import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { fetchQuotes } from '../redux/quote/quoteActions'

function QuotesContainer () {
  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])
const state = useSelector(state => state);
const dispatch = useDispatch(fetchQuotes());
  return state.loading ? (
    <h2>Loading</h2>
  ) : state.error ? (
    <h2>{state.error}</h2>
  ) : (
    <div>
      <h2>Quotes</h2>
      <div>
        {
          state.quotes.map(quote => <p>{quote.quote}</p>)
        }                
      </div>
    </div>
  )
}


export default QuotesContainer;