import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import QuoteList from "../components/quotes/QuoteList";
import style from "../components/quotes/QuoteList.module.css";
const AllQuotes = () => {
  const [quotesDataFetched, setQuotesDataFetched] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    const fetchDataFunction = () => {
      setIsLoading(true);
      fetch("https://quoteshandler-default-rtdb.firebaseio.com/quotes.json")
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          const quote = {
            id: key,
            author : data[key].author,
            quotes : data[key].text
          };
          setQuotesDataFetched(prev => {
            return [...prev, quote];
          });
        }
        setIsLoading(false);
      });
    }
    fetchDataFunction();
  }, []);
  return (
    <>
      <div className={style.sorting}>
        <button>Sort by Author</button>
      </div>
      {isLoading ? <LoadingSpinner /> : <QuoteList quotesData={quotesDataFetched}/>}
    </>
  );
};

export default AllQuotes;
