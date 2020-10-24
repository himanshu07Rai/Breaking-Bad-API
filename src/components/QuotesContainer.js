import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { fetchQuotes } from '../redux/quote/quoteActions'

function QuotesContainer () {
  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])
const quote = useSelector(state => state.quote);
const dispatch = useDispatch(fetchQuotes());
  return quote.loading ? (
    <h2>Loading</h2>
  ) : quote.error ? (
    <h2>{quote.error}</h2>
  ) : (
    <div>
      <h2>Quotes</h2>
      <div>
        {
          quote.quotes.map(quote => <p>{quote.quote}</p>)
        }                
      </div>
    </div>
  )
}


export default QuotesContainer;