import styles from "./style.module.scss";
import { AllForm } from "../../components/AllForm";
import { AllList } from "../../components/AllList";

export const HomePage = ({listNote, addNote, deleteList}) => {
    return (
        <main className={styles.container}>
          <div className={styles.flexBox}>
            <AllForm addNote={addNote} />
            <AllList listNote={listNote} deleteList={deleteList} />
          </div>
        </main>
        );
}