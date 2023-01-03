import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.quotes.quotes}</p>
      <figcaption>{props.quotes.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
