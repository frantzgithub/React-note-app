import styles from "./style.module.scss";
export const NoteNumber = ({listNote}) => {
    const total = listNote.reduce((prevValue, note) => {
        return prevValue + note.title.length + note.message.length
    }, 0)
    return (
        <div className={styles.numberBox}>
          <p className="paragraph">Notes: <span className="paragraph bold">{listNote.length}</span> Characters: <span className="paragraph bold">{total}</span>
          </p>
        </div>
        );
}