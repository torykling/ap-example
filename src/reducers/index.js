// Here we define the rootReducer, which uses the redux combineReducers function to combine
// reducers into one rootReducer so it can be passed into the store. In this application
// we only have one reducer, the contactReducer. But in a larger application we'd likely have
// several other reducers (e.g. a reducer that handled state changes when a user logged in).

import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  contacts: contactReducer
});

export default rootReducer;
