import { useEffect, useRef, useState } from "react";
import { ToDoService } from "../../services/ToDo";
import { Button } from "../Button";
import { Input } from "../Input";
import { ToDoItem } from "../ToDoItem";

function ToDoList({ todos, getTodos }) {

    const [todos_, setTodos] = useState(todos || []);
    const [todo, setTodo] = useState("");
    // const firstUpdate = useRef(true);
    let firstUpdate = true;

    const notificar = () => {
        if(getTodos) {
            getTodos(todos_);
        }
    }

    useEffect(() => {
        if(!todos.length) {
            ToDoService.getList().then((todos) => {
                console.log(todos);
                setTodos(todos);
            });
        }
    }, []);
    
    useEffect(() => {
        if(!firstUpdate) {
            const put = ToDoService.putList(todos_);
            console.log(put);
        }
        else {
            firstUpdate = false;
        }
    }, [todos_]);

    const handleAdicionar = () => {
        // const novoArray = [...todos, todo];
        // setTodos(novoArray);

        setTodos((todosAntigos) => {
            if(todo.trim()) {
                return [...todosAntigos, todo];
            }
            else {
                return todosAntigos;
            }
        });

        notificar();
    };

    const handleExcluir = (event) => {
        // const novaListaDeTodos = todos_.slice();
        // const todoRemovido = todos_.splice(event.index, 1);
        // setTodos(novaListaDeTodos);
        // window.alert(`O item "${todoRemovido}" foi removido`);

        const itensRestantes = todos_.filter((_, index) => index !== event.index);
        setTodos(itensRestantes);
        window.alert(`O item "${event.todo}" foi removido`);
        notificar();
    }

    return (
        <>
            <Input value={todo} onChange={(event) => setTodo(event.target.value)} />
            <Button adicionar onClick={handleAdicionar} />
            <ul>
                {todos_.map((todo, index) => {
                    return <ToDoItem key={index} todo={todo} onClick={() => handleExcluir({todo, index})} />
                })}
            </ul>
        </>
    );
}

export { ToDoList };