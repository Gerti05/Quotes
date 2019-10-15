import React from "react";
import { connect } from "react-redux";
import { fetchedQuotes } from "../actions";
import TweetDisplay from "./tweetButton";

//console.log(random());

class ButtonDisplay extends React.Component {
  handleClick = () => {
    this.props.fetchedQuotes(this.props.text[Math.floor(Math.random() * 30)]);
  };

  renderButton = () => {
    return (
      <div>
        <div className="d-flex justify-content-center btn-group ">
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.handleClick}
          >
            New Quote
          </button>
          </div>
        </div>
    );
  };

  render() {
    //console.log(this.props);
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = state => {
  //console.log(state.text);
  return {
    text: state.text
  };
};

export default connect(
  mapStateToProps,
  { fetchedQuotes }
)(ButtonDisplay);
