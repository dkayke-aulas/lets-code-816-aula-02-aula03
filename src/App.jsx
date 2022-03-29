import { ToDoList } from "./componentes/ToDoList";

import './App.css';
import { useRef } from "react";

function App() {

  const afazeres = ["Criar To Do List", "Comer banana", "Fazer a janta", "Estudar"];

  const recuperaTodos = (listaDeAfazer) => {
    console.log(listaDeAfazer);
  };

  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
    console.log(inputEl.current.value);
  };

  return (
    <div className="App">
      
      
      <ToDoList todos={afazeres} getTodos={(lista) => recuperaTodos(lista)} />
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export { App };
