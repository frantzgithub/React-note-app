import { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import styles from "./style.module.scss";
export const AllForm = ({addNote}) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("Homework")
    
    const submit = (e) => {
       e.preventDefault();
       if(title !== "" && message !== "") {
       addNote(title, message, category)
       setTitle("")
       setMessage("")
       }
    }
    
    return (
        <div className={styles.formBox}>
        <h2 className="title" two>Enregistrer une note</h2>
        <form onSubmit={submit}>
          <Input 
          label="Title"
          placeholder="title"
          type="text"
          id="title"
          value={title}
          setValue={setTitle} />
          <Textarea
          label="message"
          placeholder="Message"
          id="message"
          value={message}
          setValue={setMessage} ></Textarea>
          <select id="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="Homework">Homework</option>
            <option value="Note">Note</option>
          </select>   
          <button className="btn small full" type="submit">Creer une note</button>
        </form>
        </div>
        );
}