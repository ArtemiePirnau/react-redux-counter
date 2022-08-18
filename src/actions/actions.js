export const incrementNumber = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrementNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const randomNumber = (payload) => {
  payload = Math.floor(Math.random() * 100);
  return {
    type: "RANDOM",
    payload,
  };
};
