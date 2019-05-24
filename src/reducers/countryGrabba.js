let initialState = {
  filter: "All",
  countries: [],
  filteredData: []
};
let countries, filteredData;
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      countries = action.payload;
      filteredData = action.payload;
      return { ...initialState, countries, filteredData };

    case "UPDATE_COUNTRIES":
      filteredData = action.payload;
      return { ...state, filteredData };

    default:
      return state;
  }
};
