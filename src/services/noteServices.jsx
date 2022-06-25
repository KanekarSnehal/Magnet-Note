import axios from "axios";

const getConfig = () => ({
  headers: { authorization: localStorage.getItem("magnetNoteToken") },
});
const notesUrl = "/api/notes";
const archiveUrl = "/api/notes/archives";

export const getNotes = async () => await axios.get(`${notesUrl}`, getConfig());

export const addNote = async (note) =>
  await axios.post(`${notesUrl}`, { note }, getConfig());

export const updateNote = async (noteID, note) =>
  await axios.post(`${notesUrl}/${noteID}`, { note }, getConfig());

export const deleteNote = async (noteID) =>
  await axios.delete(`${notesUrl}/${noteID}`, getConfig());

export const getArchivedNotes = async () =>
  await axios.get(`${archiveUrl}`, config);

export const addToArchivedNote = async (note) =>
  await axios.post(`${archiveUrl}/${note._id}`, { note }, getConfig());

export const restoreFromArchivedNote = async (noteId) =>
  await axios.post(`api/archives/restore/${noteId}`, {}, getConfig());

export const deleteFromArchivedNote = async (noteId) =>
  await axios.delete(`api/archives/delete/${noteId}`, getConfig());
