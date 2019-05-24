import { combineReducers } from "redux";
import darkToggle from "./DarkToggle";
import countryGrabba from "./countryGrabba";
import DetailReducer from "./DetailReducer";

export default combineReducers({
  dark: darkToggle,
  fetchC: countryGrabba,
  details: DetailReducer
});
