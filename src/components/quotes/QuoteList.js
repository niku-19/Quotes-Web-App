import React from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {

  return (
    <>
      <ul className={classes.list}>
        {props.quotesData.map((quote) => (
          <>
          {console.log("🚀 ~ file: QuoteList.js:15 ~ QuoteList ~ quote", quote)}
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.quote}
            />
          </>
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
