import { useFetch, useCounter } from "../hooks";
import { DataBreakingBad } from "../useEffect/DataBreakingBad";
import { Loading } from "../utils/Loading";

export const MultipleCustomHook = () => {


  const { incrementar, counter } = useCounter(1, 1);
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <div className="container mt-2">
        <h1>ConsumiTionBreakingBadAPI</h1>
        {
          isLoading ? <Loading /> : <DataBreakingBad author={author} quote={quote} />
        }

        <button className="btn btn-primary mt-2" onClick={incrementar}>Siguiente</button>
      </div>

    </>
  );
};
