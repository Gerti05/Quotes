import { combineReducers } from "redux";
import QuoteReducer from "./quoteReducer";
import Quotes from "../api";

export default combineReducers({ text: Quotes, selectedQuote: QuoteReducer });