import React from "react";
import { connect } from "react-redux";

//const random = Math.floor(Math.random() * 30);

const AuthorDisplay = props => {
  //console.log(!props.selectedQuote.Quote);
  if (props.selectedQuote[0]) {
      //console.log('yes');
    return (
      <div key={props.selectedQuote[0].Id}>
        <p className="nameColor font-italic text-center mt-3">-{props.selectedQuote[0].Person}
        </p>
      </div>
    );
  } else {
    //console.log('no');
    return (
      <div key={props.selectedQuote.Id}>
        <p className="nameColor font-italic text-center mt-3">-{props.selectedQuote.Person}
        </p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  //console.log(state.text);
  return {
    selectedQuote: state.selectedQuote
  };
};

export default connect(mapStateToProps)(AuthorDisplay);
