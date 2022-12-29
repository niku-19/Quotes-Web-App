import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NewCommentForm from "../components/comments/NewCommentForm";
import QuotesData from "../Data/QuotesData";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const QutesDetails = () => {
  const params = useParams();
  const quotes = QuotesData.find((quote) => quote.id === params.productId);
  if (!quotes) {
    return <NoQuotesFound />;
  }
  return (
    <>
      <HighlightedQuote quotes={quotes} />
      <div>
        <Route path={`/quotes/${params.productId}`} exact>
          <NewCommentForm />
        </Route>
        <Route path={`/quotes/${params.productId}/comment`}>
          <Comments />
        </Route>
      </div>
    </>
  );
};

export default QutesDetails;
