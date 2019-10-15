import Quotes from "../api";

export default (state = [Quotes()[Math.floor(Math.random() * 30)]], action) => {
  switch (action.type) {
    case "FETCH_QUOTES":
      return action.payload;
    default:
      return state;
  }
};
