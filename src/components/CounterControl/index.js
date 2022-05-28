import styles from "../../styles/CounterControl.module.scss";

const CounterControl = ({ clicked, label }) => {
  return (
    <div onClick={clicked} className={styles.counterControl}>
      {label}
    </div>
  );
};

export default CounterControl;
