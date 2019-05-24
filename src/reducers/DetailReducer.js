let initialState = {
  details: false,
  detailCountry: {}
};
let detailCountry, details;
export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DETAILS":
      detailCountry = action.payload.country;
      details = action.payload.details;
      return { ...initialState, detailCountry, details };

    default:
      return state;
  }
};
