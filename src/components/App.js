import React from "react";
import ButtonDisplay from "./quoteButton";
import QuoteDisplay from "./quote";
import AuthorDisplay from "./author";
import TweetDisplay from "./tweetButton";

function App() {
  return (
    <div>
      <div id="quote-box" className="container quoteBackground pt-4 pb-4">
        <div id="text">
          <QuoteDisplay />
        </div>
        <div id="author">
          <AuthorDisplay />
        </div>
        <div id="new-quote">
          <ButtonDisplay />
        </div>
        <div id="tweet-quote">
          <TweetDisplay />
        </div>
      </div>
      <div className="d-flex justify-content-center fiive">
        <p>Fiive Media</p><i class="far fa-copyright"></i>
      </div>
    </div>
  );
}

export default App;
