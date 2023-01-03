import React from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  return (
    <>
      <ul className={classes.list}>
        {
          props.quotesData.map((quote) => {
            return (
              <QuoteItem
                key={quote.id}
                id={quote.id}
                text={quote.quotes}
                author={quote.author}
              />
            );
          })
        }
      </ul>
    </>
  );
};

export default QuoteList;
