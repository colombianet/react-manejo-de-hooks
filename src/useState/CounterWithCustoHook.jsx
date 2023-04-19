import { useCounter } from "../hooks/useCounter";

export const CounterWithCustoHook = () => {
  const { counter, incrementar, decrementar, reset } = useCounter(10, 10);

  return (
    <div className="container mt-2">
      <h1>CounterWithCustoHook {counter}</h1>
      <button className="btn btn-primary mx-2" onClick={incrementar}>
        Incrementar
      </button>
      <button className="btn btn-primary mx-2" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary mx-2" onClick={decrementar}>
        Decrementar
      </button>
    </div>
  );
};
