import { useState } from "react";

export const useCounter = (initialValue, increment) => {
  const [counter, setcounter] = useState(initialValue);

  const incrementar = () => {
    setcounter(counter + increment);
  };

  const decrementar = () => {
    setcounter(counter - 1);
  };

  const reset = () => {
    setcounter(initialValue);
  };
  
  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};
