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

export const getArchivedNotes = async () => {
  return await axios.get(`/api/archives`, config);
};

export const addToArchivedNote = async (note) => {
  return await axios.post(`/api/notes/archives/${note._id}`, { note }, config);
};

export const removeFromArchivedNote = async (note) => {
  return await axios.post(
    `/api/archives/restore/${note._id}`,
    { note },
    config
  );
};

export const deleteFromArchivedNote = async (noteID) => {
  return await axios.delete(`/api/archives/delete/${noteID}`, config);
};
