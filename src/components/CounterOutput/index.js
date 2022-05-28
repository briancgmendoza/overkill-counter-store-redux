import styles from "../../styles/CounterOutput.module.scss";

const CounterOutput = ({ value }) => {
  return <div className={styles.counterOutput}>Current Counter: {value}</div>;
};

export default CounterOutput;
