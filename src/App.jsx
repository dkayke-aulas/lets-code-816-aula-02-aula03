import { ToDoList } from "./componentes/ToDoList";

import './App.css';

function App() {

  const afazeres = ["Criar To Do List", "Comer banana", "Fazer a janta", "Estudar"];

  const recuperaTodos = (listaDeAfazer) => {
    console.log(listaDeAfazer);
  };

  return (
    <div className="App">
      
      
      <ToDoList todos={afazeres} getTodos={(lista) => recuperaTodos(lista)} />

    </div>
  );
}

export { App };
