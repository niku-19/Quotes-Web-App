import React, { useEffect, useState } from "react";
import { Route, useParams, Link, useRouteMatch,  } from "react-router-dom";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const QutesDetails = () => {
  const params = useParams();
  const match = useRouteMatch()
  const [quotesDataFetched, setQuotesDataFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchDataFunction = () => {
      setIsLoading(true);
      fetch("https://quoteshandler-default-rtdb.firebaseio.com/quotes.json")
        .then((response) => response.json())
        .then((data) => {
          for (const key in data) {
            const quote = {
              id: key,
              author: data[key].author,
              quotes: data[key].text,
            };
            setQuotesDataFetched((prev) => {
              return [...prev, quote];
            });
          }
          setIsLoading(false);
        });
    };
    fetchDataFunction();
  }, []);
  const quotes = quotesDataFetched.find(
    (quote) => quote.id === params.productId
  );
  if (isLoading === false && !quotes) {
    return <NoQuotesFound />;
  }
  return (
    <>
      {isLoading ? <LoadingSpinner /> : <HighlightedQuote quotes={quotes} />}
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link
            to={`/quotes/${params.productId}/comments`}
            className="btn--flat"
          >
            Add Comment
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.productId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QutesDetails;
