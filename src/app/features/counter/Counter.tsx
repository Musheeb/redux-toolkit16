import { useSelector, useDispatch } from "react-redux";

import {
  incrementByOne,
  decrementByOne,
  incrementByValue,
  resetAll,
} from "./counterSlice";

import { useState } from "react";

export default function Counter() {
  //Used to read value from the redux state store.
  const count = useSelector((state) => state.counter.count);
  // Used to send (actions) to the redux store to trigger the state updates.
  const dispatch = useDispatch();

  const [userValue, setUserValue] = useState(0);

  const addedValue = Number(userValue) || 0;

  const reset = () => {
    setUserValue(0);
    dispatch(resetAll());
  };
  return (
    <div>
      <h1>Current Counter : {count}</h1>
      <button onClick={() => dispatch(incrementByOne())}>+</button>
      <button onClick={() => dispatch(decrementByOne())}>-</button>
      <div>
        <input
          type="text"
          value={addedValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByValue(addedValue))}>
          Add Value
        </button>
        <button onClick={reset}>Reset All</button>
      </div>
    </div>
  );
}
