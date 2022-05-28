import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/import";
import CounterControl from "../../components/CounterControl";
import CounterOutput from "../../components/CounterOutput";

const mapStateToProps = (state) => {
  return { ctr: state.ctr.counter, storedResults: state.res.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add()),
    onSubtractCounter: () => dispatch(actionCreators.subtract()),
    onStoreResults: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResults: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

const Counter = (props) => {
  return (
    <>
      <CounterOutput value={props.ctr} />
      <CounterControl label="Increment" clicked={props.onIncrementCounter} />
      <CounterControl label="Decrement" clicked={props.onDecrementCounter} />

      <CounterControl label="Add 10" clicked={props.onAddCounter} />
      <CounterControl label="Subtract 15" clicked={props.onSubtractCounter} />

      <hr />

      <button onClick={() => props.onStoreResults(props.ctr)}>
        Store Result
      </button>

      <ul>
        {props.storedResults.map((result) => {
          return (
            <li
              key={result.id}
              onClick={() => props.onDeleteResults(result.id)}
            >
              Click me to delete: {result.value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
