// Here we define our action creators. Action creators are functions that create actions.
// In our case, each action creator here returns a function that makes a request to our server (depending on whether we
// want to get data, read data, update data, or delete data)
// and then dispatches an action to the store. contactReducer.js will specify how state should update when
// these actions are dispatched.

import {
  FETCH_CONTACTS,
  FETCH_CONTACT,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

export const fetchContacts = () => dispatch => {
  axios.get("http://localhost:3001/contacts").then(res =>
    dispatch({
      type: FETCH_CONTACTS,
      payload: res.data
    })
  );
};

export const fetchContact = id => dispatch => {
  axios.get(`http://localhost:3001/contacts/${id}`).then(res =>
    dispatch({
      type: FETCH_CONTACT,
      payload: res.data
    })
  );
};

export const createContact = data => dispatch => {
  axios.post("http://localhost:3001/contacts", data).then(res =>
    dispatch({
      type: POST_CONTACT,
      payload: data
    })
  );
};

export const deleteContact = id => dispatch => {
  axios.delete(`http://localhost:3001/contacts/${id}`).then(res =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  );
};

export const updateContact = data => dispatch => {
  axios.put(`http://localhost:3001/contacts/${data.id}`, data).then(res =>
    dispatch({
      type: UPDATE_CONTACT,
      payload: data
    })
  );
};
