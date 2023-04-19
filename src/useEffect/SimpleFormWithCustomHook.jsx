import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks";

export const SimpleFormWithCustomHook = () => {

  const { onChangeValue, form, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });

  return (
    <>
      <div className="container mt-2">
        <h1>Formulario simple con Hook personalizado</h1>
        <hr />

        <input
          onChange={onChangeValue}
          value={username}
          type="text"
          name="username"
          className="form-control"
          placeholder="Usuario"
        />

        <input
          onChange={onChangeValue}
          value={email}
          type="email"
          name="email"
          className="form-control mt-2"
          placeholder="Ingresar correo"
        />
        
        <input
          onChange={onChangeValue}
          value={password}
          type="password"
          name="password"
          className="form-control mt-2"
          placeholder="Ingresar contraseña"
        />

        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Limpiar formulario</button>
      </div>
      {
        username == 'Existente' && <Message />
      }
    </>
  );
};
