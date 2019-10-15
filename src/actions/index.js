export const fetchedQuotes = response => {
  console.log(response)
  return {
    type: "FETCH_QUOTES",
    payload: response
  };
};
