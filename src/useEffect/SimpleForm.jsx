import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const { username, email } = form;

  const onChangeValue = ({ target }) => {
    const { name, value } = target;
    setForm({
        ...form,
        [ name ]: value
    });
  };

  useEffect(() => {
    console.log('object')
  });

  return (
    <>
      <div className="container mt-2">
        <h1>Formulario simple</h1>
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
      </div>
      {
        username == 'Existente' && <Message />
      }
    </>
  );
};
