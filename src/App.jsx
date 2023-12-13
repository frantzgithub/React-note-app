import { useState } from "react";
import { HomePage } from "./page/HomePage";
import "./styles/index.scss";
function App() {
    const [listNote, setListNote] = useState([]);
    const addNote = (title, message, category) => {
        const id = crypto.randomUUID();
        const newNote = { title, message, category, id}
        setListNote([...listNote, newNote])
    }
    
    const deleteList = (id) => {
        const listFilter = listNote.filter((note) => {
            if(note.id !== id){
            return note;
            }
        })
        setListNote(listFilter)
    }

  return (
    <>
      <HomePage listNote={listNote} addNote={addNote} deleteList={deleteList} />
    </>
  )
}

export default App
