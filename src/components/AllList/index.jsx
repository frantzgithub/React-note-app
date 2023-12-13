import { NoteNumber } from "../NoteNumber";
import { ListCard } from "./ListCard";
import styles from "./style.module.scss";
export const AllList = ({listNote, deleteList}) => {
    
    return (
        <div className={styles.todoList}>
          <h2 className="title one">Liste de notes</h2>
          <NoteNumber listNote={listNote} />
          {listNote.length > 0 ? (
          <ul>
          {
          listNote.map((note) =>
           {
           const { title, message, category, id } = note;
           return <ListCard key={id} id={id} title={title} message={message} category={category} deleteList={deleteList} />
           })
          }
          </ul>) : 
          <p>create your first note</p>
          }
          
        </div>
        );
}