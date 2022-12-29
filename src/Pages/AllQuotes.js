import React,{ useEffect } from 'react'
import QuoteList from '../components/quotes/QuoteList'
const AllQuotes = () => {
  const quotesDataFetched = [];
  const fetchData = () => {
    fetch("https://quoteshandler-default-rtdb.firebaseio.com/quotes.json")
    .then((resp) => {
      return resp.json()
    }).then((data) => {
      for(const key in data){
        quotesDataFetched.push({
          id: key,
          author: data[key].author,
          quote: data[key].text
        })
      }
    })
  }
  useEffect(() => {
    fetchData()
  })
  return (
    <div>
      <QuoteList quotesData={quotesDataFetched}/>
    </div>
  )
}

export default AllQuotes
