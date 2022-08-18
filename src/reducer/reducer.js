const initialState = {
  number: 0,
};

export const reducer = (state = initialState, action) => {
  if (state === undefined) {
    return state;
  }
  switch (action.type) {
    case "INCREMENT":
      return {
        number: state.number + 1,
      };
    case "DECREMENT":
      return {
        number: state.number - 1,
      };
    case "RANDOM":
      return {
        number: action.payload,
      };
    default:
      return state;
  }
};
