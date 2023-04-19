import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onChangeValue, onResetForm } = useForm({ description: "" });
    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <= 1 ) return;
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        onNewTodo( newTodo );
        onResetForm();
    };

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        value={description}
        name="description"
        onChange={onChangeValue}
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
