import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const { user, setuser } = useContext( UserContext );
    return (
      <>
          <div className="container mt-2">
              <h1>LoginPage { user?.name }</h1>
              <hr />
              <button className="btn btn-primary" onClick={ () => setuser({name: 'Oscar'})}>Establecer usuario</button>
          </div>
      </>
    )
  }
  