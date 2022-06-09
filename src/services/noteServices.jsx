import axios from "axios";

const config = {
  headers: { authorization: localStorage.getItem("magnetNoteToken") },
};
const notesUrl = "/api/notes";
const archiveUrl = "/api/notes/archives";

export const getNotes = async () => await axios.get(`${notesUrl}`, config);

export const addNote = async (note) =>
  await axios.post(`${notesUrl}`, { note }, config);

export const updateNote = async (noteID, note) =>
  await axios.post(`${notesUrl}/${noteID}`, { note }, config);

export const deleteNote = async (noteID) =>
  await axios.delete(`${notesUrl}/${noteID}`, config);

export const getArchivedNotes = async () =>
  await axios.get(`${archiveUrl}`, config);

export const addToArchivedNote = async (note) =>
  await axios.post(`${archiveUrl}/${note._id}`, { note }, config);

export const restoreFromArchivedNote = async (note) =>
  await axios.post(`${archiveUrl}/restore/${note._id}`, config);

export const deleteFromArchivedNote = async (noteID) =>
  await axios.delete(`${archiveUrl}/delete/${noteID}`, config);
