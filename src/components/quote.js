import React from "react";
import { connect } from "react-redux";

//const random = Math.floor(Math.random() * 30);

//console.log(random());

const QuoteDisplay = props => {
  //console.log(props.selectedQuote[0]);
  if (props.selectedQuote[0]) {
    //console.log('bo');
    return (
      <div key={props.selectedQuote[0].Id}>
        <h5 className='quoteColor text-center'><i class="fas fa-xs fa-quote-left"></i> {props.selectedQuote[0].Quote} <i class="fas fa-xs fa-quote-right"></i></h5>
      </div>
    );
  } else {
    //console.log('iii');
    return (
      <div key={props.selectedQuote.Id}>
        <h5 className='quoteColor text-center'><i class="fas fa-xs fa-quote-left"></i> {props.selectedQuote.Quote} <i class="fas fa-xs fa-quote-right"></i></h5>
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

export default connect(mapStateToProps)(QuoteDisplay);
