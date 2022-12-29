import React from 'react'
import axois from 'axios'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'


const AddNewQuotes = () => {
  const history = useHistory()
  const onAddQuotesHandler = async(quoteData) => {
    const response = await axois.post("https://quoteshandler-default-rtdb.firebaseio.com/quotes.json", quoteData)
    history.push('/quotes')
    const data = response.data
    console.log(data)
  }
  return (
    <>
      <QuoteForm onAddQuote={onAddQuotesHandler} />
    </>
  )
}

export default AddNewQuotes
