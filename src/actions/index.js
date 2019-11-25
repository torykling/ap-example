import {
  FETCH_CONTACTS,
  FETCH_CONTACT,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

export const fetchContacts = () => dispatch => {
  console.log("fetching");
  axios.get("http://localhost:3001/contacts").then(res =>
    dispatch({
      type: FETCH_CONTACTS,
      payload: res.data
    })
  );
};
// payload here is being saved to state.items
export const fetchContact = id => dispatch => {
  console.log("fetching");
  axios.get(`http://localhost:3001/contacts/${id}`).then(res =>
    dispatch({
      type: FETCH_CONTACT,
      payload: res.data
    })
  );
};
// state.item
export const createContact = data => dispatch => {
  console.log("posting");
  axios.post("http://localhost:3001/contacts", data).then(res =>
    dispatch({
      type: POST_CONTACT,
      payload: data
    })
  );
};
// state.item
export const deleteContact = id => dispatch => {
  console.log("deleting");
  axios.delete(`http://localhost:3001/contacts/${id}`).then(res =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  );
};
// state.item
export const updateContact = data => dispatch => {
  console.log("updating");
  axios.put(`http://localhost:3001/contacts/${data.id}`, data).then(res =>
    dispatch({
      type: UPDATE_CONTACT,
      payload: data
    })
  );
};
// state.item
