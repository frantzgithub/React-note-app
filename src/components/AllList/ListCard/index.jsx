import styles from "./style.module.scss";
export const ListCard = ({title, message, category, id, deleteList}) => {
    
    return (
          <div className={`${styles.todoCard} 
          ${category === "Homework" ? styles.blue : styles.orange}`}>
            <h3 className="title two">{title}</h3>
            <p className="paragraph">{message}</p>
            <button className="btn small" onClick={() => deleteList(id)}>Delete</button>
          </div>
        );
}