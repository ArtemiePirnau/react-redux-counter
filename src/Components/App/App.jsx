import { connect } from "react-redux";
import {
  decrementNumber,
  incrementNumber,
  randomNumber,
} from "../../actions/actions";
import "./App.scss";

const App = ({ number, onIncrement, onDecrement, onRandom }) => {
  return (
    <div className="app">
      <h3 className="counter">{number}</h3>
      <div className="buttons">
        <button className="btn" onClick={() => onIncrement()}>
          INCREMENT
        </button>
        <button className="btn" onClick={() => onDecrement()}>
          DECREMENT
        </button>
        <button className="btn" onClick={() => onRandom()}>
          RANDOM
        </button>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(incrementNumber()),
    onDecrement: () => dispatch(decrementNumber()),
    onRandom: () => dispatch(randomNumber()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
