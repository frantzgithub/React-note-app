import styles from "./style.module.scss"
export const Input = ({ label, id, placeholder, value, setValue, type}) => {
    return (
        <div className={styles.inputBox}>
          <label htmlFor={id}>{label}</label>
          <input name={id}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange ={(e) => setValue(e.target.value) } />
        </div>
        );
}