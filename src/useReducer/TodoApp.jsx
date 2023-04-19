import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "./useTodo";

export const TodoApp = () => {
    const {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount,
        todosPending
    } = useTodo();

    return (
        <>
            <div className="container mt-2">
                <h1>TodoApp: { todosCount }, pendientes: <small>{ todosPending }</small></h1>
                <div className="row">
                    <div className="col-sm-7">
                        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                    </div>
                    <div className="col-sm-5">
                        <h4>Agregar TODO</h4>
                        <TodoAdd onNewTodo={handleNewTodo} />
                    </div>
                </div>
            </div>
        </>
    )
}
