import axios from "axios";

const config = {
  headers: { authorization: localStorage.getItem("token") },
};

export const getNotes = async () => {
  return await axios.get(`/api/notes`, config);
};

export const addNote = async (note) => {
  return await axios.post(`/api/notes`, { note }, config);
};

export const updateNote = async (noteID, note) => {
  return await axios.post(`/api/notes/${noteID}`, { note }, config);
};

export const deleteNote = async (noteID) => {
  return await axios.delete(`/api/notes/${noteID}`, config);
};
