// Here we define the contactReducer. It's a pure function that takes the previous state and
// an action and returns the updated state. Here we define how the state should be updated
// depending on the type of the action.
import {
  FETCH_CONTACTS,
  FETCH_CONTACT,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...state, items: action.payload };
    case FETCH_CONTACT:
      return { ...state, item: action.payload };
    case POST_CONTACT:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_CONTACT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id !== action.payload.id) return item;
          return { ...item, ...action.payload };
        })
      };
    default:
      return state;
  }
}
