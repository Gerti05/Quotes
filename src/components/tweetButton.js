import React from "react";
import { connect } from "react-redux";

//console.log(random());

class TweetDisplay extends React.Component {
  tweetButton = () => {
    if (this.props.selectedQuote[0]) {
      //console.log('bo');
      return (
        <div className="d-flex justify-content-center">
          {" "}
          <a
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?text=" +
              this.props.selectedQuote[0].Quote +
              " " +
              this.props.selectedQuote[0].Person
            }
            rel="noopener noreferrer"
          >
            <i className="fab fa-3x fa-twitter-square"></i>
          </a>
        </div>
      );
    } else {
      //console.log('iii');
      return (
        <div className="d-flex justify-content-center">
            {" "}
            <a
              target="_blank"
              href={
                "https://twitter.com/intent/tweet?text=" +
                this.props.selectedQuote.Quote +
                " " +
                this.props.selectedQuote.Person
              }
              rel="noopener noreferrer"
            >
              <i className="fab fa-3x fa-twitter-square"></i>
            </a>
        </div>
      );
    }
  };

  render() {
    //console.log(this.props);
    return <div>{this.tweetButton()}</div>;
  }
}

const mapStateToProps = state => {
  //console.log(state.text);
  return {
    selectedQuote: state.selectedQuote
  };
};

export default connect(mapStateToProps)(TweetDisplay);
